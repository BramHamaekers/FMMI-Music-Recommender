(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var idList = ["2D3gvohUyOfXIVX6Mvhqae", "7fURZRPkB2S70sYR1naKTK", "4cOdK2wGLETKBW3PvgPWqT", "0b9BpOmZC33EjJNWewLJwK", "2LtMq5ELlpRgzP4JSxMGmn", "2i3VpjK6T6gEDENwlUU4cr", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT", "4cOdK2wGLETKBW3PvgPWqT"];
var rankingList = ['', '', '', '', ''];

function createListItem(id, number) {
    var embed = document.createElement("div");
    embed.id = `spotify-embed${number}`;
    embed.className = "spotify-embed";
    embed.draggable = "true";

    var handle = document.createElement("div");
    handle.id = `handle${number}`;
    handle.className = "handle";


    var iframe = document.createElement('iframe');
    iframe.src = `https://embed.spotify.com/?uri=spotify:track:${id}`;
    iframe.width = "100%";
    iframe.height = "80";
    iframe.frameBorder = "0";
    iframe.allowTransparency = "true";

    embed.appendChild(handle);
    embed.appendChild(iframe);

    document.getElementById("spotify-embeds").appendChild(embed);
}


for (var i = 0; i < 20; i++) {
    createListItem(idList[i], i);
}

const embeds = document.querySelectorAll('.spotify-embed');

embeds.forEach(embed => {
    embed.addEventListener("dragstart", dragStart);
    embed.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
    embeds.forEach(embed => {
        embed.classList.add("no-drag-target");
    });
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
    
}

function dragEnd(e) {
    embeds.forEach(embed => {
        embed.classList.remove("no-drag-target");
    });
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.remove('hide');
    }, 0);
    
}

const ranks = document.querySelectorAll('.rank');

ranks.forEach(rank => {
    rank.addEventListener('dragenter', dragEnter)
    rank.addEventListener('dragover', dragOver);
    rank.addEventListener('dragleave', dragLeave);
    rank.addEventListener('drop', drop);
});

const spotifyembeds = document.getElementById("spotify-embeds");
spotifyembeds.addEventListener('dragenter', dragEnter)
spotifyembeds.addEventListener('dragover', dragOver);
spotifyembeds.addEventListener('dragleave', dragLeave);
spotifyembeds.addEventListener('drop', drop);


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    if (e.target.classList.contains("rank")) {
        var rank = parseInt(e.target.id[4]) // get ranking number from id of div
        if (rankingList[rank-1] == '') {
            songId = idList[parseInt(e.dataTransfer.getData('text/plain')[13])]; // get song id from id of div
            rankingList[rankingList.indexOf(songId)] = ''; //remove duplicates
            rankingList[rank-1] = songId;
            e.target.classList.remove('drag-over');

            // add it to the drop target
            e.target.appendChild(draggable);
        }
    }

    if (e.target.id == "spotify-embeds") {
        songId = idList[parseInt(e.dataTransfer.getData('text/plain')[13])]; // get song id from id of div
        rankingList[rankingList.indexOf(songId)] = '';
        spotifyembeds.classList.remove('drag-over');

        // get the draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        // add it to the drop target
        spotifyembeds.prepend(draggable);

        // display the draggable element
        draggable.classList.remove('hide');
    }

    console.log(rankingList);
}

document.getElementById("submitBtn").addEventListener("click", () => {submit()});

function submit() {
  //get recommendations based on rankingList and go to recommendations page
  

}
},{}]},{},[1]);
