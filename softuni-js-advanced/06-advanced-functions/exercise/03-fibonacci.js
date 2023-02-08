function fibonacci() {
    let prev = 0;
    let num = 1;
    let counter = 0;
    return function add() {
        if (counter == 0) {
            counter++;
        } else {
            let res = num + prev;
            prev = num;
            num = res;
        }
        return num;
    }
}
let fib = fibonacci();


console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
