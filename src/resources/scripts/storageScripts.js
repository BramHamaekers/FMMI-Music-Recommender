

export function storeSongs(songsObject) {
    const tracks = songsObject.tracks;
    var songs = [];
    tracks.forEach(track => {
        songs.push(track.id);
    });

    var count = 1;
    songs.forEach(song => {
        window.localStorage.setItem("Song"+count.toString(), song);
        count += 1;
    });
}

export function getSongs() {
    var songs = [];
    for (var count = 1; count <= 20; count++) {
        songs.push(window.localStorage.getItem("Song"+count.toString()));
    }

    return songs;
}

export function clearSongs() {
    for (var count = 1; count <= 20; count++) {
        window.localStorage.removeItem("Song"+count.toString());
    }
}