function add(num) {
    let sum = 0;   
 
    function inner(next) {
        sum += next;
        return inner;
    }
    inner.toString = () => {
        return sum;
    }

    return inner(num);
}

// console.log(add(1)); // 1
// console.log(add(1)(6)(-3)); // 4

console.log(add(1).toString()); // 1
console.log(add(1)(6)(-3).toString()); // 4

