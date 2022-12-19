(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _timerScripts = require("./timerScripts");
var _storageScripts = require("./storageScripts");
//var idList = ["2D3gvohUyOfXIVX6Mvhqae", "7fURZRPkB2S70sYR1naKTK", "4cOdK2wGLETKBW3PvgPWqT", "0b9BpOmZC33EjJNWewLJwK", "2LtMq5ELlpRgzP4JSxMGmn", "2i3VpjK6T6gEDENwlUU4cr", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT"];
var idList = (0, _storageScripts.getSongs)();
function createListItem(id, number) {
  var iframe = document.createElement('iframe');
  iframe.src = `https://embed.spotify.com/?uri=spotify:track:${id}`;
  iframe.width = "250";
  iframe.height = "352";
  iframe.frameBorder = "0";
  document.getElementById(`embed${number}`).appendChild(iframe);
}
for (var i = 1; i < 21; i++) {
  createListItem(idList[i - 1], i);
}
document.getElementById("endBtn").addEventListener("click", storeEndTimeHomepage);
function storeEndTimeHomepage(e) {
  e.preventDefault();
  console.log('store end time');
  (0, _timerScripts.storeTimeSpent)();
  document.location.href = "./questionnaire";
}
document.getElementById("retryBtn").addEventListener("click", retry);
function retry(e) {
  window.localStorage.setItem("retryCount", parseInt(window.localStorage.getItem("retryCount")) + 1);
  window.history.back();
}

},{"./storageScripts":2,"./timerScripts":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearTimes = clearTimes;
exports.storeStartTime = storeStartTime;
exports.storeTimeSpent = storeTimeSpent;
function storeStartTime() {
  const date = new Date();
  window.localStorage.setItem("startTime", date);
}
function storeTimeSpent() {
  const startTime = Date.parse(window.localStorage.getItem("startTime"));
  const endTime = new Date();
  console.log("startTimeInMilliseconds: " + startTime);
  console.log("endTimeInMilliseconds: " + endTime.getTime());
  console.log("endTime: " + endTime);
  const timeSpent = (endTime.getTime() - startTime) / (1000 * 60);
  window.localStorage.setItem("timeSpent", timeSpent);
}
function clearTimes() {
  window.localStorage.removeItem("startTime");
  window.localStorage.removeItem("timeSpent");
}

},{}]},{},[1]);
