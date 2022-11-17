function movies(input) {
    let commands = input.slice();
    let movies = [];
    while (commands.length > 0) {
        let command = commands.shift().split(" ");
        let type = command[0];
        switch (type) {
            case "addMovie":
                command.shift();
                let movieString = command.join(" ");
                let movie = {
                    name: movieString
                };
                movies.push(movie);
                break;
            default:
                let name = [];
                let words = 0;
                for (let i = 0; i < command.length; i++) {
                    let currentWord = command[i];
                    if (currentWord != "onDate" && currentWord != "directedBy") {
                        name.push(currentWord);
                        words++;
                    } else {
                        name = name.join(" ");
                        break;
                    }
                }
                for (let word = 0; word < words; word++) {
                    command.shift();
                }
                let currentMovieIndex = -1;
                let counter = -1;
                for (let arrayElement of movies) {
                    counter++;
                    let currentMovieName = arrayElement.name;
                    if (currentMovieName == name) {
                        currentMovieIndex = counter;
                        break;
                    }
                }
                if (currentMovieIndex != -1) {
                    let directorIndex = command.indexOf("directedBy");
                    let hasDirector = directorIndex != -1;
                    if (hasDirector) {
                        let fillDirector = command.slice(directorIndex + 1).join(" ");
                        movies[currentMovieIndex].director = fillDirector;
                    }
                    let dateIndex = command.indexOf("onDate");
                    let hasDate = dateIndex != -1;
                    if (hasDate) {
                        movies[currentMovieIndex].date = command[dateIndex + 1];
                    }
                }
                break;
        }
    }

    for (let movie of movies) {
        let propertiesArr = Object.keys(movie);
        if (propertiesArr.length >= 3) {
            let result = JSON.stringify(movie);
            console.log(result);
        }
    }

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