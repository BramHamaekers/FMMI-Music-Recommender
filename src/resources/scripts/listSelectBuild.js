(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _storageScripts = require("./storageScripts");
//var idList = ["2D3gvohUyOfXIVX6Mvhqae", "7fURZRPkB2S70sYR1naKTK", "4cOdK2wGLETKBW3PvgPWqT", "0b9BpOmZC33EjJNWewLJwK", "2LtMq5ELlpRgzP4JSxMGmn", "2i3VpjK6T6gEDENwlUU4cr", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT"];
var idList = (0, _storageScripts.getSongs)();
//clearSongs();
var songList = [];
function createListItem(id, number) {
  var embed = document.createElement("div");
  embed.className = "spotify-embed";
  var heart = document.createElement("div");
  heart.id = `heart${number}`;
  heart.className = 'heart-button heart';
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
document.getElementById("heart0").addEventListener("click", () => {
  addSong(idList[0]);
});
document.getElementById("heart1").addEventListener("click", () => {
  addSong(idList[1]);
});
document.getElementById("heart2").addEventListener("click", () => {
  addSong(idList[2]);
});
document.getElementById("heart3").addEventListener("click", () => {
  addSong(idList[3]);
});
document.getElementById("heart4").addEventListener("click", () => {
  addSong(idList[4]);
});
document.getElementById("heart5").addEventListener("click", () => {
  addSong(idList[5]);
});
document.getElementById("heart6").addEventListener("click", () => {
  addSong(idList[6]);
});
document.getElementById("heart7").addEventListener("click", () => {
  addSong(idList[7]);
});
document.getElementById("heart8").addEventListener("click", () => {
  addSong(idList[8]);
});
document.getElementById("heart9").addEventListener("click", () => {
  addSong(idList[9]);
});
document.getElementById("heart10").addEventListener("click", () => {
  addSong(idList[10]);
});
document.getElementById("heart11").addEventListener("click", () => {
  addSong(idList[11]);
});
document.getElementById("heart12").addEventListener("click", () => {
  addSong(idList[12]);
});
document.getElementById("heart13").addEventListener("click", () => {
  addSong(idList[13]);
});
document.getElementById("heart14").addEventListener("click", () => {
  addSong(idList[14]);
});
document.getElementById("heart15").addEventListener("click", () => {
  addSong(idList[15]);
});
document.getElementById("heart16").addEventListener("click", () => {
  addSong(idList[16]);
});
document.getElementById("heart17").addEventListener("click", () => {
  addSong(idList[17]);
});
document.getElementById("heart18").addEventListener("click", () => {
  addSong(idList[18]);
});
document.getElementById("heart19").addEventListener("click", () => {
  addSong(idList[19]);
});
document.getElementById("submitBtn").addEventListener("click", () => {
  storeAndSend();
});
function storeAndSend() {
  if (songList.length > 0) {
    console.log(songList);
    document.location.href = "./Recommendations.html";
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

},{"./storageScripts":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearSongs = clearSongs;
exports.getSongs = getSongs;
exports.storeSongs = storeSongs;
function storeSongs(songsObject) {
  const tracks = songsObject.tracks;
  var songs = [];
  tracks.forEach(track => {
    songs.push(track.id);
  });
  var count = 1;
  songs.forEach(song => {
    window.localStorage.setItem("Song" + count.toString(), song);
    count += 1;
  });
}
function getSongs() {
  var songs = [];
  for (var count = 1; count <= 20; count++) {
    songs.push(window.localStorage.getItem("Song" + count.toString()));
  }
  return songs;
}
function clearSongs() {
  for (var count = 1; count <= 20; count++) {
    window.localStorage.removeItem("Song" + count.toString());
  }
}

},{}]},{},[1]);
