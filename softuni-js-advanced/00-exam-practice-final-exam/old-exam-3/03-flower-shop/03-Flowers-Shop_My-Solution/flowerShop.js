const flowerShop = {
    calcPriceOfFlowers(flower, price, quantity) {
        if (typeof flower != 'string' || !Number.isInteger(price) || !Number.isInteger(quantity)) {
            throw new Error('Invalid input!');
        } else {
            let result = price * quantity;
            return `You need $${result.toFixed(2)} to buy ${flower}!`;
        }
    },
    checkFlowersAvailable(flower, gardenArr) {
        if (gardenArr.indexOf(flower) >= 0) {
            return `The ${flower} are available!`;
        } else {
            return `The ${flower} are sold! You need to purchase more!`;
        }
    },
    sellFlowers(gardenArr, space) {
        let shop = [];
        let i = 0;
        if (!Array.isArray(gardenArr) || !Number.isInteger(space) || space < 0 || space >= gardenArr.length) {
            throw new Error('Invalid input!');
        } else {
            while (gardenArr.length > i) {
                if (i != space) {
                    shop.push(gardenArr[i]);
                }
                i++
            }
        }
        return shop.join(' / ');
    }
}
module.exports = flowerShop;

// let test1 = flowerShop.calcPriceOfFlowers('', 3, -1);
// console.log(test1);
// let test2 = flowerShop.checkFlowersAvailable(-1, -1);
// console.log(test2);
let test3 = flowerShop.sellFlowers(["", "Lily", "Orchid"], 2);
console.log(test3);