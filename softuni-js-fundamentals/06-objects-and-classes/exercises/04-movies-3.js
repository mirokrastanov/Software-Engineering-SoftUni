function movies(input) {
    let movies = [];

    input.forEach(command => {
        if (command.includes("addMovie")) {
            let [add, movie] = command.split("addMovie ");
            let entry = {
                name: movie,
            }
            movies.push(entry);
        } else if (command.includes("directedBy")) {
            let [name, director] = command.split(" directedBy ");
            movies.forEach(entry => {
                if (entry.name == name) {
                    entry.director = director;
                }
            });
        } else if (command.includes("onDate")) {
            let [name, date] = command.split(" onDate ");
            movies.forEach(entry => {
                if (entry.name == name) {
                    entry.date = date;
                }
            });
        }
    });

    movies.forEach(entry => {
        let properties = Object.keys(entry).length;
        if (properties == 3) {
            console.log(JSON.stringify(entry));
        }
    });

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);