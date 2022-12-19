(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _timerScripts = require("./timerScripts");
//var idList = ["2D3gvohUyOfXIVX6Mvhqae", "7fURZRPkB2S70sYR1naKTK", "4cOdK2wGLETKBW3PvgPWqT", "0b9BpOmZC33EjJNWewLJwK", "2LtMq5ELlpRgzP4JSxMGmn", "2i3VpjK6T6gEDENwlUU4cr", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT"];
var idList = getSongs();
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
}

},{"./timerScripts":2}],2:[function(require,module,exports){
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
