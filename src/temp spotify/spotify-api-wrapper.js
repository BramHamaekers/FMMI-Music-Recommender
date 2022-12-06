var request = require('request'); // "Request" library
var SpotifyWebApi = require('./spotify-web-api-js');

/*****************************************************************************
*                            SET UP AUTHENTICATION
/*****************************************************************************/

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

/*****************************************************************************
*                            SET UP LISTNERS
/*****************************************************************************/

document.getElementById("genreBtn").addEventListener("click", getGenreSeed);
document.getElementById("artistBtn").addEventListener("click", getArtist);
document.getElementById("recBtn").addEventListener("click", getRecommendations);


/*****************************************************************************
*                            FUNCTIONALITY
/*****************************************************************************/

function getArtist(e) {
  e.preventDefault();
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });
}

function getGenreSeed(e) {
  e.preventDefault();
  spotifyApi.getAvailableGenreSeeds(function (err, data) {
    if (err) console.error(err);
    else console.log('Genre Seed', data);
  })
}

function getRecommendations(e) {
  e.preventDefault();
  spotifyApi.getRecommendations({seed_genres: ["classical", "country"]},function (err, data) {
    if (err) console.error(err);
    else console.log('recommendations', data);
  })
}











