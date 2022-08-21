function test(input) {
    //testing purposes
    for (let i = 0; i <= 12; i++) {
        let check = input[i];
        if (check.match(/[a-z]/i)) {
            console.log(check);
        }
    }

}

// test([
//     'H',
//     'n',
//     'e',
//     'l',
//     'l',
//     'o',
//     'o',
//     'c',
//     't',
//     'c',
//     'h',
//     'o',
//     'e',
//     'r',
//     'e',
//     'n',
//     'e',
//     'End'
// ]);
test([
    '%',
    '!',
    'c',
    '^',
    'B',
    '`',
    'o',
    '%',
    'o',
    'o',
    'M',
    ')',
    '{',
    'n',
    '\\',
    'A',
    'D',
    'End'
]);