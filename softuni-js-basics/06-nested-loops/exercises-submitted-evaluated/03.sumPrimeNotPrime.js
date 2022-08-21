function sumPrimeNotPrime(input) {
    let index = 0;
    let num = input[index];
    index++;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (num !== "stop") {
        let isPrime = true;
        num = Number(num);
        if (num < 0) {
            console.log(`Number is negative.`);
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            switch (isPrime) {
                case false: nonPrimeSum += num; break;
                case true: primeSum += num; break;
                default: break;
            }
        }
        num = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}

sumPrimeNotPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);
sumPrimeNotPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);
sumPrimeNotPrime(["0",
    "-9",
    "0",
    "stop"]);

