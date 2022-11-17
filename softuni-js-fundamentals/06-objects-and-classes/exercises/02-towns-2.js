function towns(input) {
    let towns = [];

    function createTown(town, latitude, longitude) {
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let entry = {
            town,
            latitude,
            longitude,
        };
        return entry;
    }

    input.forEach(element => {
        let [town, latitude, longitude] = element.split(" | ");
        towns.push(createTown(town, latitude, longitude));
    });

    towns.forEach(element => {
        console.log(element);
    });

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);