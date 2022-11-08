function convertToJSON(input) {

    let obj = {
        name: input[0],
        lastName: input[1],
        hairColor: input[2],
    };

    let strigified = JSON.stringify(obj);
    console.log(strigified);

}

convertToJSON(['George', 'Jones', 'Brown']);