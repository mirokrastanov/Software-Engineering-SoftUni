function changeBureau(input) {
    let bitcons = Number(input[0]);
    let yuans = Number(input[1]);
    let agencyCut = Number(input[2]);

    let bitcoinINlev = bitcons * 1168;
    let yuansINlev = (yuans * 0.15) * 1.76;
    let bitcoinINeuro = bitcoinINlev / 1.95;
    let yuansINeuro = yuansINlev / 1.95;
    let total = bitcoinINeuro + yuansINeuro;
    total = total - (total * (agencyCut / 100));
    console.log(total.toFixed(2));

}

changeBureau(["1", "5", "5"]);
changeBureau(["20", "5678", "2.4"]);
changeBureau(["7", "50200.12", "3"]);