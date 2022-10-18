function sortArray(input) {
    let result = input.slice().sort((a, b) => a.length - b.length || a.localeCompare(b));
    
    console.log(result.join("\n"));

}

// sortArray(['alpha', 'beta', 'gamma']);
// sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArray(['test', 'Deny', 'omen', 'Default']);