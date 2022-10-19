function listOfProducts(inputArr) {
    let workingArr = inputArr.slice();
    workingArr.sort();

    for (const elem of workingArr) {
        let i = workingArr.indexOf(elem);
        console.log(`${i + 1}.${elem}`);
    }

}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
// listOfProducts(['Watermelon', 'Banana', 'Apples']);