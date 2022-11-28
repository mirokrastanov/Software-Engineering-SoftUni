function pianist(input) {
    let songQuantity = Number(input.shift());
    let songs = [];

    for (let i = 0; i < songQuantity; i++) {
        let [name, composer, key] = input.shift().split("|");
        let song = {
            name,
            composer,
            key,
        };
        songs.push(song);
    }
    let commands = input.splice(0);

    while (commands.length > 0) {
        let command = commands.shift();
        if (command == "Stop") {
            songs.forEach(el => {
                console.log(`${el.name} -> Composer: ${el.composer}, Key: ${el.key}`);
            });
            break;
        }
        let [type, name, v1, v2] = command.split("|");
        let song = {
            name,
            composer: v1,
            key: v2,
        };
        switch (type) {
            case "Add":
                if (!alreadyPresent(songs, song)) {
                    songs.push(song);
                    console.log(`${song.name} by ${song.composer} in ${song.key} added to the collection!`);
                } else {
                    console.log(`${song.name} is already in the collection!`);
                }
                break;
            case "Remove":
                if (alreadyPresent(songs, song)) {
                    removeSong(songs, song);
                    console.log(`Successfully removed ${song.name}!`);
                } else {
                    console.log(`Invalid operation! ${song.name} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                if (alreadyPresent(songs, song)) {
                    let presentIndex = findSongIndex(songs, song);
                    songs[presentIndex].key = v1;
                    console.log(`Changed the key of ${song.name} to ${v1}!`);
                } else {
                    console.log(`Invalid operation! ${song.name} does not exist in the collection.`);
                }
                break;
        }
    }

    function findSongIndex(songs, song) {
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].name == song.name) {
                return i;
            }
        }
    }

    function removeSong(songs, song) {
        let songIndex = -1;
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].name == song.name) {
                songIndex = i;
                break;
            }
        }
        songs.splice(songIndex, 1);
    }

    function alreadyPresent(songs, song) {
        let present = false;
        songs.forEach(el => {
            if (el.name == song.name) {
                present = true;
            }
        });
        if (present) {
            return true;
        } else {
            return false;
        }
    }
}

pianist(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
pianist(['4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);