
exports.generateOptions = function (theSelectedOption) {
    // TODO: Adjust accordingly
    const valuesRaw = {
        "crypto-wallet": "Crypto Wallet",
        "credit-card": "Credit Card",
        "debit-card": "Debit Card",
        "paypal": "Paypal",
    };
    let options = [];

    Object.entries(valuesRaw).forEach(([key, value], index) => options.push({
        title: valuesRaw[key],
        value: key,
        selected: theSelectedOption == key,
    }));

    return options;
}

// TODO: Adjust accordingly - create additional if there are more than one select tags

exports.optionIsValid = function (option) {
    const valuesRaw = [
        "crypto-wallet",
        "credit-card",
        "debit-card",
        "paypal",
    ];
    let flag;
    valuesRaw.forEach(x => {
        if (x == option) flag = true;
    })
    if (flag) return true;
    return false;
}