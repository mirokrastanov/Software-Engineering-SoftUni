function softuniBarIncome(commands) {
    let totalIncome = 0;
    let command = commands.shift();
    let customerRegExp = /(?<customer>%[A-Z][a-z]+%)/g;
    let productRegExp = /(?<product><\w+>)/g;
    let countRegExp = /(?<count>\|\d+\|)/g;
    let priceRegExp = /(?<price>[0-9]*[.]?[0-9]*\$)/g;

    while (command != 'end of shift') {
        let validCustomer = command.match(customerRegExp);
        let validProduct = command.match(productRegExp);
        let validCount = command.match(countRegExp);
        let validPrice = command.match(priceRegExp);
        if (validCustomer && validProduct && validCount && validPrice) {
            let customer = validCustomer.join(" ").split("").filter(a => a != '%').join("");
            let product = validProduct.join(" ").split("").filter(a => a != '<' && a != '>').join("");
            let count = validCount.join(" ").split("").filter(a => a != '|').join("");
            let price = validPrice.join(" ").split("").filter(a => a != '$').join("");
            let orderTotal = Number(count) * Number(price);
            totalIncome += orderTotal;
            console.log(`${customer}: ${product} - ${orderTotal.toFixed(2)}`);
        }
        command = commands.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}

softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);