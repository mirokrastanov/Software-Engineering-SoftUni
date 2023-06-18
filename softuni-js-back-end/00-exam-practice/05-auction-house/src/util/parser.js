
exports.generateOptions = function (theSelectedOption) {
    // TODO: Adjust accordingly
    const valuesRaw = {
        "estate": "Real Estate",
        "vehicles": "Vehicles",
        "furniture": "Furniture",
        "electronics": "Electronics",
        "other": "Other",
    };

    let options = [];

    Object.entries(valuesRaw).forEach(([key, value], index) => options.push({
        title: valuesRaw[key],
        value: key,
        selected: theSelectedOption == key,
    }));

    return options;
}

// TODO: Adjust accordingly - create additional if there are more than one select tags

