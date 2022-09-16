function rounding(number, roundTo) {
    if (roundTo > 15) {
        roundTo = 15;
    }
    let result = number.toFixed(roundTo);
    result = parseFloat(result);

    console.log(result);

}

rounding(3.1415926535897932384626433832795, 2);