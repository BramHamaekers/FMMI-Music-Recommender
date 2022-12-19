import { storeSongs, clearSongs, getSongs } from './storageScripts';
var request = require('request'); // "Request" library
var SpotifyWebApi = require('./spotify-web-api-js');
var client_id = '882f18d8e93e419d85e06d9fe9ee9768'; // Your client id
var client_secret = '6fb7db9d3d4d45dea315d47e645919aa'; // Your secret
let token;
let tokenstring;
const spotifyApi = new SpotifyWebApi();

var idList = getSongs();
var rankingList = ['', '', '', '', ''];
var weightvector = [0.56, 0.285, 0.12, 0.036, 0.0044];

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};


// Gets the token
request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    token = body.access_token;
    tokenstring = token.toString();
    
    spotifyApi.setAccessToken(tokenstring);
  }
});


function createListItem(id, number) {
    var embed = document.createElement("div");
    embed.id = `spotify-embed${number}`;
    embed.className = "spotify-embed botMargin";
    embed.draggable = "true";


    var handle = document.createElement("div");
    handle.id = `handle${number}`;
    handle.className = "handle";


    var iframe = document.createElement('iframe');
    iframe.src = `https://embed.spotify.com/?uri=spotify:track:${id}`;
    iframe.width = "100%";
    iframe.height = "80";
    iframe.frameBorder = "0";
    iframe.allowTransparency = "true";

    embed.appendChild(handle);
    embed.appendChild(iframe);

    document.getElementById("spotify-embeds").appendChild(embed);
}


for (var i = 0; i < 20; i++) {
    createListItem(idList[i], i);
}

const embeds = document.querySelectorAll('.spotify-embed');

embeds.forEach(embed => {
    embed.addEventListener("dragstart", dragStart);
    embed.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
    embeds.forEach(embed => {
        embed.classList.add("no-drag-target");
    });
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
    
}

function dragEnd(e) {
    embeds.forEach(embed => {
        embed.classList.remove("no-drag-target");
    });
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.remove('hide');
    }, 0);
    
}

const ranks = document.querySelectorAll('.rank');

ranks.forEach(rank => {
    rank.addEventListener('dragenter', dragEnter)
    rank.addEventListener('dragover', dragOver);
    rank.addEventListener('dragleave', dragLeave);
    rank.addEventListener('drop', drop);
});

const spotifyembeds = document.getElementById("spotify-embeds");
spotifyembeds.addEventListener('dragenter', dragEnter)
spotifyembeds.addEventListener('dragover', dragOver);
spotifyembeds.addEventListener('dragleave', dragLeave);
spotifyembeds.addEventListener('drop', drop);


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    if (e.target.classList.contains("rank")) {
        draggable.classList.remove('botMargin');
        var rank = parseInt(e.target.id[4]) // get ranking number from id of div
        if (rankingList[rank-1] == '') {
            var songId = idList[parseInt(e.dataTransfer.getData('text/plain')[13])]; // get song id from id of div
            rankingList[rankingList.indexOf(songId)] = ''; //remove duplicates
            rankingList[rank-1] = songId;
            e.target.classList.remove('drag-over');

            // add it to the drop target
            e.target.appendChild(draggable);
        }
    }

    if (e.target.id == "spotify-embeds") {
        var songId = idList[parseInt(e.dataTransfer.getData('text/plain')[13])]; // get song id from id of div
        rankingList[rankingList.indexOf(songId)] = '';
        spotifyembeds.classList.remove('drag-over');

        // get the draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        draggable.classList.add('botMargin');


        // add it to the drop target
        spotifyembeds.prepend(draggable);

        // display the draggable element
        draggable.classList.remove('hide');
    }

    console.log(rankingList);
}

document.getElementById("submitBtn").addEventListener("click", () => {submit()});


async function getFeatures(id) {
    await spotifyApi.getAudioFeaturesForTrack(id).then((data) => {
        console.log('Features', data);
        return data;
    }, (err) => {
        console.log("Error getting features.", err);
    }) 
  }

  //ik wil het er nie over hebbe
async function submit() {
    for (var id of rankingList) {
        if (id == '') {
            return;
        }
      }

    var acousticnessList = [];
    var danceabilityList = [];
    var energyList = [];
    var instrumentalnessList = [];
    var livesnessList = [];
    var loudnessList = [];
    var speechinessList = [];
    var tempoList = [];
    var valenceList = [];

    for (var id of rankingList) {
        await spotifyApi.getAudioFeaturesForTrack(id).then((features) => {
            console.log(id, features);
            acousticnessList.push(features.acousticness);
            danceabilityList.push(features.danceability);
            energyList.push(features.energy);
            instrumentalnessList.push(features.instrumentalness);
            livesnessList.push(features.livesness);
            loudnessList.push(features.loudness);
            speechinessList.push(features.speechiness);
            tempoList.push(features.tempo);
            valenceList.push(features.valence);

            spotifyApi.getRecommendations({seed_tracks: [rankingList[0], rankingList[1], rankingList[2]], target_danceability: weightedFeature(danceabilityList), 
                target_energy: weightedFeature(energyList), 
                target_tempo: weightedFeature(tempoList),
                target_instrumentalness: weightedFeature(instrumentalnessList),
                target_liveness: weightedFeature(livesnessList),
                target_loudness: weightedFeature(loudnessList),
                target_speechiness: weightedFeature(speechinessList),
                target_valence: weightedFeature(valenceList),
                target_acousticness: weightedFeature(acousticnessList)},function (err, data) {
            if (err) console.error(err);
            else   storeSongs(data);
                    document.location.href = "./recommendations";
        })
        }, (err) => {
            console.log("Error getting features.", err);
        }) 
        
        
    }

  }

function weightedFeature(featureList) {
    var total = 0;
    for (var i = 0; i < 5; i++) {
        total += featureList[i] * weightvector[i];
    }
    return total;
}