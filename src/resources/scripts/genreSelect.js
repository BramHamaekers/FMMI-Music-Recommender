import { storeSongs } from './storageScripts';
var request = require('request'); // "Request" library
var SpotifyWebApi = require('./spotify-web-api-js');

/*****************************************************************************
*                            SET UP AUTHENTICATION
/*****************************************************************************/

var genreList = [];
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

//ik wil het er nie over hebben
document.getElementById("rockBtn").addEventListener("click", () => {
  if (document.getElementById("rockBtn").className.includes("u-btn-1") && genreList.length != 5)
    document.getElementById("rockBtn").className = document.getElementById("rockBtn").className.replace( /(?:^|\s)u-btn-1(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("rockBtn").className = document.getElementById("rockBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-1 ' );
});

document.getElementById("popBtn").addEventListener("click", () => {
  if (document.getElementById("popBtn").className.includes("u-btn-2") && genreList.length != 5)
    document.getElementById("popBtn").className = document.getElementById("popBtn").className.replace( /(?:^|\s)u-btn-2(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("popBtn").className = document.getElementById("popBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-2 ' );
});

document.getElementById("hip-hopBtn").addEventListener("click", () => {
  if (document.getElementById("hip-hopBtn").className.includes("u-btn-3") && genreList.length != 5)
    document.getElementById("hip-hopBtn").className = document.getElementById("hip-hopBtn").className.replace( /(?:^|\s)u-btn-3(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("hip-hopBtn").className = document.getElementById("hip-hopBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-3 ' );
});

document.getElementById("metalBtn").addEventListener("click", () => {
  if (document.getElementById("metalBtn").className.includes("u-btn-4") && genreList.length != 5)
    document.getElementById("metalBtn").className = document.getElementById("metalBtn").className.replace( /(?:^|\s)u-btn-4(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("metalBtn").className = document.getElementById("metalBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-4 ' );
});

document.getElementById("funkBtn").addEventListener("click", () => {
  if (document.getElementById("funkBtn").className.includes("u-btn-5") && genreList.length != 5)
    document.getElementById("funkBtn").className = document.getElementById("funkBtn").className.replace( /(?:^|\s)u-btn-5(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("funkBtn").className = document.getElementById("funkBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-5 ' );
});

document.getElementById("jazzBtn").addEventListener("click", () => {
  if (document.getElementById("jazzBtn").className.includes("u-btn-6") && genreList.length != 5)
    document.getElementById("jazzBtn").className = document.getElementById("jazzBtn").className.replace( /(?:^|\s)u-btn-6(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("jazzBtn").className = document.getElementById("jazzBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-6 ' );
});

document.getElementById("technoBtn").addEventListener("click", () => {
  if (document.getElementById("technoBtn").className.includes("u-btn-7") && genreList.length != 5)
    document.getElementById("technoBtn").className = document.getElementById("technoBtn").className.replace( /(?:^|\s)u-btn-7(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("technoBtn").className = document.getElementById("technoBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-7 ' );
});

document.getElementById("classicalBtn").addEventListener("click", () => {
  if (document.getElementById("classicalBtn").className.includes("u-btn-8") && genreList.length != 5)
    document.getElementById("classicalBtn").className = document.getElementById("classicalBtn").className.replace( /(?:^|\s)u-btn-8(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("classicalBtn").className = document.getElementById("classicalBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-8 ' );
});

document.getElementById("punkBtn").addEventListener("click", () => {
  if (document.getElementById("punkBtn").className.includes("u-btn-9") && genreList.length != 5)
    document.getElementById("punkBtn").className = document.getElementById("punkBtn").className.replace( /(?:^|\s)u-btn-9(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("punkBtn").className = document.getElementById("punkBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-9 ' );
});

document.getElementById("k-popBtn").addEventListener("click", () => {
  if (document.getElementById("k-popBtn").className.includes("u-btn-10") && genreList.length != 5)
    document.getElementById("k-popBtn").className = document.getElementById("k-popBtn").className.replace( /(?:^|\s)u-btn-10(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("k-popBtn").className = document.getElementById("k-popBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-10 ' );
});

document.getElementById("chillBtn").addEventListener("click", () => {
  if (document.getElementById("chillBtn").className.includes("u-btn-11") && genreList.length != 5)
    document.getElementById("chillBtn").className = document.getElementById("chillBtn").className.replace( /(?:^|\s)u-btn-11(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("chillBtn").className = document.getElementById("chillBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-11 ' );
});

document.getElementById("alternativeBtn").addEventListener("click", () => {
  if (document.getElementById("alternativeBtn").className.includes("u-btn-12") && genreList.length != 5)
    document.getElementById("alternativeBtn").className = document.getElementById("alternativeBtn").className.replace( /(?:^|\s)u-btn-12(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("alternativeBtn").className = document.getElementById("alternativeBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-12 ' );
});

document.getElementById("indieBtn").addEventListener("click", () => {
  if (document.getElementById("indieBtn").className.includes("u-btn-13") && genreList.length != 5)
    document.getElementById("indieBtn").className = document.getElementById("indieBtn").className.replace( /(?:^|\s)u-btn-13(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("indieBtn").className = document.getElementById("indieBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-13 ' );
});

document.getElementById("countryBtn").addEventListener("click", () => {
  if (document.getElementById("countryBtn").className.includes("u-btn-14") && genreList.length != 5)
    document.getElementById("countryBtn").className = document.getElementById("countryBtn").className.replace( /(?:^|\s)u-btn-14(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("countryBtn").className = document.getElementById("countryBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-14 ' );
});

document.getElementById("edmBtn").addEventListener("click", () => {
  if (document.getElementById("edmBtn").className.includes("u-btn-15") && genreList.length != 5)
    document.getElementById("edmBtn").className = document.getElementById("edmBtn").className.replace( /(?:^|\s)u-btn-15(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("edmBtn").className = document.getElementById("edmBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-15 ' );
});

document.getElementById("r-n-bBtn").addEventListener("click", () => {
  if (document.getElementById("r-n-bBtn").className.includes("u-btn-16") && genreList.length != 5)
    document.getElementById("r-n-bBtn").className = document.getElementById("r-n-bBtn").className.replace( /(?:^|\s)u-btn-16(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("r-n-bBtn").className = document.getElementById("r-n-bBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-16 ' );
});

document.getElementById("soulBtn").addEventListener("click", () => {
  if (document.getElementById("soulBtn").className.includes("u-btn-17") && genreList.length != 5)
    document.getElementById("soulBtn").className = document.getElementById("soulBtn").className.replace( /(?:^|\s)u-btn-17(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("soulBtn").className = document.getElementById("soulBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-17 ' );
});

document.getElementById("partyBtn").addEventListener("click", () => {
  if (document.getElementById("partyBtn").className.includes("u-btn-18") && genreList.length != 5)
    document.getElementById("partyBtn").className = document.getElementById("partyBtn").className.replace( /(?:^|\s)u-btn-18(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("partyBtn").className = document.getElementById("partyBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-18 ' );
});

document.getElementById("work-outBtn").addEventListener("click", () => {
  if (document.getElementById("work-outBtn").className.includes("u-btn-19") && genreList.length != 5)
    document.getElementById("work-outBtn").className = document.getElementById("work-outBtn").className.replace( /(?:^|\s)u-btn-19(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("work-outBtn").className = document.getElementById("work-outBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-19 ' );
});

document.getElementById("metalcoreBtn").addEventListener("click", () => {
  if (document.getElementById("metalcoreBtn").className.includes("u-btn-20") && genreList.length != 5)
    document.getElementById("metalcoreBtn").className = document.getElementById("metalcoreBtn").className.replace( /(?:^|\s)u-btn-20(?!\S)/g , ' active-btn ' );
  else
    document.getElementById("metalcoreBtn").className = document.getElementById("metalcoreBtn").className.replace( /(?:^|\s)active-btn(?!\S)/g , ' u-btn-20 ' );
});

document.getElementById("rockBtn").addEventListener("click", () => {addGenre("rock")});
document.getElementById("popBtn").addEventListener("click", () => {addGenre("pop")});
document.getElementById("hip-hopBtn").addEventListener("click", () => {addGenre("hip-hop")});
document.getElementById("metalBtn").addEventListener("click", () => {addGenre("metal")});
document.getElementById("funkBtn").addEventListener("click", () => {addGenre("funk")});
document.getElementById("jazzBtn").addEventListener("click", () => {addGenre("jazz")});
document.getElementById("technoBtn").addEventListener("click", () => {addGenre("techno")});
document.getElementById("classicalBtn").addEventListener("click", () => {addGenre("classical")});
document.getElementById("punkBtn").addEventListener("click", () => {addGenre("punk")});
document.getElementById("k-popBtn").addEventListener("click", () => {addGenre("k-pop")});
document.getElementById("chillBtn").addEventListener("click", () => {addGenre("chill")});
document.getElementById("alternativeBtn").addEventListener("click", () => {addGenre("alternative")});
document.getElementById("indieBtn").addEventListener("click", () => {addGenre("indie")});
document.getElementById("countryBtn").addEventListener("click", () => {addGenre("country")});
document.getElementById("edmBtn").addEventListener("click", () => {addGenre("edm")});
document.getElementById("r-n-bBtn").addEventListener("click", () => {addGenre("r-n-b")});
document.getElementById("soulBtn").addEventListener("click", () => {addGenre("soul")});
document.getElementById("partyBtn").addEventListener("click", () => {addGenre("party")});
document.getElementById("work-outBtn").addEventListener("click", () => {addGenre("work-out")});
document.getElementById("metalcoreBtn").addEventListener("click", () => {addGenre("metalcore")});





function addGenre(genre) {
  if (genreList.includes(genre)) {
    genreList = genreList.filter(e => e !== genre);
  } else {
    if (genreList.length != 5) {
      genreList.push(genre);
    }
    
  }
  
  console.log(genreList);
}



//Submit button
document.getElementById("submitBtn").addEventListener("click", getRecommendations);
function getRecommendations(e) {
  if (genreList.length > 0) {
    e.preventDefault();
    spotifyApi.getRecommendations({seed_genres: genreList},function (err, data) {
      if (err) console.error(err);
      else {
        console.log('recommendations', data);
        storeSongs(data);
        if (window.localStorage.getItem("method") == "list") {
          document.location.href = "./listSelect";
        } else if (window.localStorage.getItem("method") == "ranking") {
          document.location.href = "./ranking";
        }    
      }
    })
  }
  }

  
  
