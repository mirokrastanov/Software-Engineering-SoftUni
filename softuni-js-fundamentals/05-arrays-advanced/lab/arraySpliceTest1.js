function solve() {

    let array1 = ['1', '2', '3', '4'];
    array1.splice(1, 0, 'lada', 'trabant');
    console.log(array1);

    let array2 = ['1', '2', '3', '4'];
    array2.splice(1, 2, 'honda');
    console.log(array2);

}

solve();