function city(input) {

    let obj = {
        name: input[0],
        area: input[1],
        population: input[2],
        country: input[3],
        postCode: input[4],
    };

    for (let element in obj) {
        console.log(`${element} -> ${obj[element]}`);
    }

}


// Input comes as an Array in Judge -> Hence altering logic to first create the object, before iterating through it


// city({
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// });
// city({
//     name: "Plovdiv",
//     area: 389,
//     population: 1162358,
//     country: "Bulgaria",
//     postCode: "4000"
// });