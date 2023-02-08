function sortArr(arr, order) {
    if (order == 'asc') return asc(arr);
    else if (order == 'desc') return desc(arr);

    function asc(arr) {
        return arr.sort((a, b) => a - b);
    }
    function desc(arr) {
        return arr.sort((a, b) => b - a);
    }
}

// console.log(sortArr([14, 7, 17, 6, 8], 'asc'));

sortArr([14, 7, 17, 6, 8], 'asc');
sortArr([14, 7, 17, 6, 8], 'desc');