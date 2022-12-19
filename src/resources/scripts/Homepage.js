import { storeStartTime } from './timerScripts';

document.getElementById("startBtn").addEventListener("click", storeStartTimeHomepage);
function storeStartTimeHomepage(e) {
      e.preventDefault();

      console.log('store start time');
      storeStartTime();
      document.location.href = "./genreSelect";
}

var url = window.location.href;
var path = url.charAt(url.length-1);
window.localStorage.setItem("path", path)

if (path == "A") {
      window.localStorage.setItem("method", "list")
} else if (path == "B") {
      window.localStorage.setItem("method", "ranking")
}