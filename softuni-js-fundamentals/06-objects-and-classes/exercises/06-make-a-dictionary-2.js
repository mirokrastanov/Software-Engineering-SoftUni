function makeADictionary(input) {
    let dictionary = {};

    input.forEach(currentJSON => {
        let item = JSON.parse(currentJSON);
        for (let key in item) {
            dictionary[key] = item[key];
        }
    });

    let sorted = Object.fromEntries(Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])));
    
    for (let key in sorted) {
        console.log(`Term: ${key} => Definition: ${sorted[key]}`);
    }

}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);