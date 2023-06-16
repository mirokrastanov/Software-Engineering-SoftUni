
exports.generateOptions = function (theSelectedOption) {
    // TODO: Adjust accordingly
    const valuesRaw = [
        'Very Easy',
        'Easy',
        'Medium (Standard 3x3)',
        'Intermediate',
        'Expert',
        'Hardcore',
    ];

    const options = valuesRaw.map((value, index) => ({
        title: value, 
        value: value,
        selected: theSelectedOption == value,
    }));

    return options;
}

// TODO: Adjust accordingly - create additional if there are more than one select tags

