(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _timerScripts = require("./timerScripts");
document.getElementById("startBtn").addEventListener("click", storeStartTimeHomepage);
function storeStartTimeHomepage(e) {
  e.preventDefault();
  console.log('store start time');
  (0, _timerScripts.storeStartTime)();
  document.location.href = "./Genre-select.html";
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
