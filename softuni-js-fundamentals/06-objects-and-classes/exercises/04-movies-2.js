function movies(input) {
    let movies = [];

    function createMovie(current) {
        let movie = {
            name: current,
        };
        return movie;
    }

    input.forEach(command => {
        if (command.includes("addMovie")) {
            let [add, movie] = command.split("addMovie ");
            movies.push(createMovie(movie));
        } else {
            if (command.includes("directedBy")) {
                let [name, director] = command.split(" directedBy ");
                for (let movie of movies) {
                    if (movie.name == name) {
                        movie.director = director;
                    }
                }
            } else if (command.includes("onDate")) {
                let [name, date] = command.split(" onDate ");
                for (let movie of movies) {
                    if (movie.name == name) {
                        movie.date = date;
                    }
                }
            }
        }
    });

    movies.forEach(element => {
        let toArray = Object.entries(element);
        if (toArray.length == 3) {
            let toPrint = Object.fromEntries(toArray);
            console.log(JSON.stringify(toPrint));
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
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);