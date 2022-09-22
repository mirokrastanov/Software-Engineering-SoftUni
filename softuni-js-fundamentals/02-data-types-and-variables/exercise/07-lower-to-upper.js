function lowerToUpper(character) {
    character = character.toString();
    let result = character == character.toUpperCase() ? "upper-case" : "lower-case";
    console.log(result);
}

lowerToUpper("L");