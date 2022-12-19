import { storeSongs, clearSongs, getSongs } from './storageScripts';
var request = require('request'); // "Request" library
var SpotifyWebApi = require('./spotify-web-api-js');
var client_id = '882f18d8e93e419d85e06d9fe9ee9768'; // Your client id
var client_secret = '6fb7db9d3d4d45dea315d47e645919aa'; // Your secret
let token;
let tokenstring;
const spotifyApi = new SpotifyWebApi();

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



//var idList = ["2D3gvohUyOfXIVX6Mvhqae", "7fURZRPkB2S70sYR1naKTK", "4cOdK2wGLETKBW3PvgPWqT", "0b9BpOmZC33EjJNWewLJwK", "2LtMq5ELlpRgzP4JSxMGmn", "2i3VpjK6T6gEDENwlUU4cr", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT"];
var idList = getSongs();
//clearSongs();
var songList = [];

function createListItem(id, number) {
    var embed = document.createElement("div");
    embed.className = "spotify-embed";

    var heart = document.createElement("div");
    heart.id = `heart${number}`;
    heart.className ='heart-button heart';

    var iframe = document.createElement('iframe');
    iframe.src = `https://embed.spotify.com/?uri=spotify:track:${id}`;
    iframe.width = "100%";
    iframe.height = "80";
    iframe.frameBorder = "0";
    iframe.allowBransparency = "true";

    embed.appendChild(heart);
    embed.appendChild(iframe);

    document.getElementById("spotify-embeds").appendChild(embed);
}

for (var i = 0; i < 20; i++) {
    createListItem(idList[i], i);
}

document.getElementById("heart0").addEventListener("click", () => {addSong(idList[0])});
document.getElementById("heart1").addEventListener("click", () => {addSong(idList[1])});
document.getElementById("heart2").addEventListener("click", () => {addSong(idList[2])});
document.getElementById("heart3").addEventListener("click", () => {addSong(idList[3])});
document.getElementById("heart4").addEventListener("click", () => {addSong(idList[4])});
document.getElementById("heart5").addEventListener("click", () => {addSong(idList[5])});
document.getElementById("heart6").addEventListener("click", () => {addSong(idList[6])});
document.getElementById("heart7").addEventListener("click", () => {addSong(idList[7])});
document.getElementById("heart8").addEventListener("click", () => {addSong(idList[8])});
document.getElementById("heart9").addEventListener("click", () => {addSong(idList[9])});
document.getElementById("heart10").addEventListener("click", () => {addSong(idList[10])});
document.getElementById("heart11").addEventListener("click", () => {addSong(idList[11])});
document.getElementById("heart12").addEventListener("click", () => {addSong(idList[12])});
document.getElementById("heart13").addEventListener("click", () => {addSong(idList[13])});
document.getElementById("heart14").addEventListener("click", () => {addSong(idList[14])});
document.getElementById("heart15").addEventListener("click", () => {addSong(idList[15])});
document.getElementById("heart16").addEventListener("click", () => {addSong(idList[16])});
document.getElementById("heart17").addEventListener("click", () => {addSong(idList[17])});
document.getElementById("heart18").addEventListener("click", () => {addSong(idList[18])});
document.getElementById("heart19").addEventListener("click", () => {addSong(idList[19])});

document.getElementById("submitBtn").addEventListener("click", () => {storeAndSend()});

function storeAndSend() {
  if (songList.length > 0) {
    spotifyApi.getRecommendations({seed_tracks: songList},function (err, data) {
      if (err) console.error(err);
      else {
        console.log('recommendations', data);
        document.location.href = "./Recommendations.html";
        storeSongs(data);
      }
    })
  }
  

}



function addSong(song) {
    if (songList.includes(song)) {
        songList = songList.filter(e => e !== song);
    } else {
      if (songList.length != 5) {
        songList.push(song);
      }
      
    }
    
    console.log(songList);
  }
