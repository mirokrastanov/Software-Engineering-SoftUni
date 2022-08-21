function seq2Kplus1(input) {
    let n = Number(input[0]);
    let printNumber = 1;
    while (printNumber <= n) {
        console.log(printNumber);
        printNumber = (printNumber * 2) + 1;
    }
}

seq2Kplus1(["3"]);
seq2Kplus1(["8"]);
seq2Kplus1(["17"]);
seq2Kplus1(["31"]);