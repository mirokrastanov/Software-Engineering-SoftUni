function minerTask(input) {
    let workingArr = input.slice();
    let resources = {};

    while (workingArr.length > 0) {
        let [resource, quantity] = workingArr.splice(0, 2);
        if (resources[resource]) {
            resources[resource] += Number(quantity);
        } else {
            resources[resource] = Number(quantity);
        }
    }

    for (let key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }

}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);