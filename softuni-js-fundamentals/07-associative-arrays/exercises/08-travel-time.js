function travelTime(input) {
    let workingArr = input.slice();
    let destinations = {};

    while (workingArr.length > 0) {
        let current = workingArr.shift();
        let [country, town, cost] = current.split(" > ");
        if (destinations[country]) {
            let existing = destinations[country];
            let townIndex = existing.indexOf(town);
            if (townIndex != -1) {
                let currentCost = existing[townIndex + 1];
                if (currentCost > cost) {
                    existing.splice(townIndex + 1, 1, cost);
                }
            } else {
                destinations[country].push(town);
                destinations[country].push(Number(cost));
            }
        } else {
            destinations[country] = [town, Number(cost)];
        }

    }
    let sorted = Object.fromEntries(Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0])));

    for (let key in sorted) {
        let toPrint = sorted[key].slice();
        let toSort = {};
        for (let i = 0; i < toPrint.length; i += 2) {
            let town = toPrint[i];
            let cost = toPrint[i + 1];
            toSort[town] = cost;
        }
        let sortedPrint = Object.entries(toSort).sort((a, b) => a[1] - b[1]);
        toPrint = [];
        sortedPrint.forEach(element => {
            toPrint.push(element[0]);
            toPrint.push(element[1]);
        });
        sorted[key] = toPrint.slice();        
        let output = `${key} -> `;
        for (let i = 0; i < toPrint.length; i += 2) {
            output += `${toPrint[i]} -> ${toPrint[i + 1]}`
            if (i < toPrint.length - 2) {
                output += " ";
            }
        }
        console.log(output);
    }

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);