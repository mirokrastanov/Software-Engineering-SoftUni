function solve() {

    let obj1 = {
        age: 80,
        date: 24,
    };
    let obj2 = {
        ...obj1,
        age: 3 * obj1.date,
        date: obj1.date + 1,
        month: 2,
    };
    let obj3 = { ...obj1 };

    console.log(obj1);
    console.log(obj2);
    console.log(obj3);

}

solve();