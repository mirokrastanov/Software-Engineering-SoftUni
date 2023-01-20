function gcd(a, b) {
    let greatest;

    let temp = a;
    let end = a >= b ? a : b;
    let start = a >= b ? b : a;

    for (let i = 1; i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            greatest = i;
        }
    }

    console.log(greatest);
}

gcd(15, 5);
gcd(2154, 458);