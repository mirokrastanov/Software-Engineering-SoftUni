function companyUsers(input) {
    let database = input.slice();
    let dbObj = {};

    for (let entry of database) {
        let [company, id] = entry.split(" -> ");
        if (dbObj[company]) {
            let currentIDs = dbObj[company];
            if (currentIDs.indexOf(id) == -1) {
                dbObj[company].push(id);
            }
        } else {
            dbObj[company] = [id];
        }
    }

    let sorted = (Object.entries(dbObj)).sort(([companyA, idsA], [companyB, idsB]) => companyA.localeCompare(companyB));
    let sortedObj = Object.fromEntries(sorted);

    for (let [company, ids] of Object.entries(sortedObj)) {
        console.log(company);
        ids.forEach(element => {
            console.log(`-- ${element}`);
        });
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);