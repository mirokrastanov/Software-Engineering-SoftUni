function convertor(input) {
    let usdToBgn = 1.79549;
    let bgn = Number(input[0]) * usdToBgn;

    console.log(bgn);
}

convertor(["22"]);