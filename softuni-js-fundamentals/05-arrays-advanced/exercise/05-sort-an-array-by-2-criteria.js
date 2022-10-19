function sortBy2(inputArr) {
    let result = inputArr.slice().sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(result.join("\n"));

}

sortBy2(['alpha', 'beta', 'gamma']);
sortBy2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);