function convertToObject(input) {
    let joined = input.join("");
    let parsed = JSON.parse(joined);
    
    for (const key in parsed) {
        console.log(`${key}: ${parsed[key]}`);
    }

}

convertToObject(['{"name": "George", "age": 40, "town": "Sofia"}']);