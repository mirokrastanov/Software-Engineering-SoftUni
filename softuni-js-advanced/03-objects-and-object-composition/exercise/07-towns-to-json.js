function toJSON(input) {
    function trimLine(line) {
        line = line.split("");
        line.shift();
        line.pop();
        return line.join("").trim();
    }
    let towns = [];
    let headers = trimLine(input.shift());
    let [header1, header2, header3] = headers.split(" | ");

    input.forEach(element => {
        let line = trimLine(element);
        let [town, latitude, longitude] = line.split(" | ");
        towns.push({
            [header1]: town,
            [header2]: Number(Number(latitude).toFixed(2)),
            [header3]: Number(Number(longitude).toFixed(2)),
        });
    });

    console.log(JSON.stringify(towns));
}

toJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
toJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);