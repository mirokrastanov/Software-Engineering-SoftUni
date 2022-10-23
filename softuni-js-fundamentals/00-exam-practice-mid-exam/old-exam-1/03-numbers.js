function numbers(inputArr) {
    let integers = inputArr.split(" ").map(Number);
    let sum = integers.reduce((a, b) => a + b);
    let average = sum / integers.length;
    let result = [];
    let counter = 0;
    integers.sort((a, b) => b - a);
    
    for (let i = 0; i < integers.length; i++) {
        let current = integers[i];
        if (current > average) {
            result.push(current);
            counter++
        }
        if (counter == 5) {
            break;
        }
    }
    if (result.length == 0) {
        console.log("No");
    } else {
        console.log(result.join(" "));
    }
    
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');