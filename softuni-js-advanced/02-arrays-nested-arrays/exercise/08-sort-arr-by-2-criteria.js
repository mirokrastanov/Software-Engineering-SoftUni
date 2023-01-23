function sortArr(input) {
    let sorted = input.sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join(`\n`));

}

sortArr(['alpha',
    'beta',
    'gamma']
);
sortArr(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

);
sortArr(['test',
    'Deny',
    'omen',
    'Default']
);