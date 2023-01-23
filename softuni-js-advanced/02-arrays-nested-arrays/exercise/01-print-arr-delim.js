function printArrDelimeter(input, delim) {
    
    console.log(input.join(`${delim}`));

}

printArrDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');