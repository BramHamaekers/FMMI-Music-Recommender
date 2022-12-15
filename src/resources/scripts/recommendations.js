import { storeTimeSpent } from './timerScripts';

var idList = ["2D3gvohUyOfXIVX6Mvhqae", "7fURZRPkB2S70sYR1naKTK", "4cOdK2wGLETKBW3PvgPWqT", "0b9BpOmZC33EjJNWewLJwK", "2LtMq5ELlpRgzP4JSxMGmn", "2i3VpjK6T6gEDENwlUU4cr", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT"];

function createListItem(id, number) {

    var iframe = document.createElement('iframe');
    iframe.src = `https://embed.spotify.com/?uri=spotify:track:${id}`;
    iframe.width = "250";
    iframe.height = "352";
    iframe.frameBorder = "0";

    document.getElementById(`embed${number}`).appendChild(iframe);
}

for (var i = 1; i < 21; i++) {
    createListItem(idList[i-1], i);
}

document.getElementById("endBtn").addEventListener("click", storeEndTimeHomepage);
function storeEndTimeHomepage(e) {
      e.preventDefault();

      console.log('store end time');
      storeTimeSpent();
}