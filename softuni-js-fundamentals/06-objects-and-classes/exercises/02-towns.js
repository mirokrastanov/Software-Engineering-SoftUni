function towns(input) {

    for (const entry of input) {
        let current = entry.slice().split(" | ");
        let town = current[0];
        let latitude = Number(current[1]).toFixed(2);
        let longitude = Number(current[2]).toFixed(2);
        let outputTown = {
            town: town,
            latitude: latitude,
            longitude: longitude
        }
        console.log(outputTown);
    }

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);