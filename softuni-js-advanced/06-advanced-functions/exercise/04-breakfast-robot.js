function breakfastRobot() {
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2, },
        lemonade: { carbohydrate: 10, flavour: 20, },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, fat: 1, flavour: 1, },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10, },
    };
    let storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0, };

    return function (input) {
        let [type, v1, v2] = input.split(" ");
        switch (type) {
            case "restock":
                storage[v1] += Number(v2);
                return 'Success';
            case "prepare":
                let needed = {};
                for (const [key, value] of Object.entries(recipes[v1])) {
                    let req = Number(v2) * value;
                    if (storage[key] < req) {
                        return `Error: not enough ${key} in stock`
                    } else {
                        needed[key] = req;
                    }
                }
                for (const [key, value] of Object.entries(needed)) {
                    storage[key] -= value;
                }
                return 'Success';
            case "report":
                let output = '';
                for (const [key, value] of Object.entries(storage)) {
                    output += `${key}=${value} `;
                }
                return output.trim();
        }
    }
}

let manager = breakfastRobot();

console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
