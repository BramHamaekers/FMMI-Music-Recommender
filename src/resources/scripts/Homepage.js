import { storeStartTime } from './timerScripts';

document.getElementById("startBtn").addEventListener("click", storeStartTimeHomepage);
function storeStartTimeHomepage(e) {
      e.preventDefault();

      console.log('store start time');
      storeStartTime();
      document.location.href = "./Genre-select.html";
}