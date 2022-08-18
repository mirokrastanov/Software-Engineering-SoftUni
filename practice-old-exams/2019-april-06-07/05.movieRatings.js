function movieRatings(input) {
    let index = 0;
    let movieCount = Number(input[index]);
    index++;
    let inputData = input[index];
    index++;
    let bestRating = Number.MIN_SAFE_INTEGER;
    let worstRating = Number.MAX_SAFE_INTEGER;
    let bestMovie = "";
    let worstMovie = "";
    let totalRating = 0;
    //   let movieCounter = 0;

    //   while (movieCounter < movieCount) {
    for (let i = 0; i < movieCount; i++) {
        let currentMovie = inputData;
        //    movieCounter++;
        let currentRating = Number(input[index]);
        index++;
        if (currentRating > bestRating) {
            bestRating = currentRating;
            bestMovie = currentMovie;
        }
        if (currentRating < worstRating) {
            worstRating = currentRating;
            worstMovie = currentMovie;
        }
        totalRating += currentRating;

        inputData = input[index];
        index++;
    }
    let averageRating = totalRating / movieCount;
    console.log(`${bestMovie} is with highest rating: ${bestRating.toFixed(1)}`);
    console.log(`${worstMovie} is with lowest rating: ${worstRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);

}

movieRatings(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"]);
movieRatings(["3",
    "Interstellar",
    "8.5",
    "Dangal",
    "8.3",
    "Green Book",
    "8.2"]);
