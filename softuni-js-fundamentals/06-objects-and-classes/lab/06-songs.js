function songs(input) {
    let songsArr = input.slice();
    let songQuantity = Number(songsArr.shift());

    class Song {
        constructor(type, name, time) {
            this.type = type;    
            this.name = name;
            this.time = time;
        }
    };

    let songs = [];
    for (let i = 0; i < songQuantity; i++) {
        let command = songsArr.shift();
        let [type, name, time] = command.split("_");
        let song = new Song (type, name, time);
        songs.push(song);
    }

    let toPrint = songsArr.shift();
    for (let song of songs) {
        if (song.type == toPrint || toPrint == "all") {
            console.log(song.name);
        }
    }
}

songs([
    '3',
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);