document.getElementById("storeSongs").addEventListener("click", storeData);
document.getElementById("clearSongs").addEventListener("click", clearSongs);


function storeData(e) {
    e.preventDefault();

    const checked = document.querySelectorAll('input[type="checkbox"]:checked')
    selected = Array.from(checked).map(x => x.value)


    var count = 1;
    selected.forEach(song => {
        window.localStorage.setItem("Song"+count.toString(), song);
        count += 1;
    });
}

function clearSongs(e) {
    e.preventDefault();
    for (count = 1; count <= 5; count++) {
        window.localStorage.removeItem("Song"+count.toString());
    }
}