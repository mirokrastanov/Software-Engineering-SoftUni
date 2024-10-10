/*
 * Complete the 'romanizer' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function romanizer(numbers) {
    function convertor(num) {
        const romanNumerals = [
            ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
            ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
            ["X", 10], ["IX", 9], ["V", 5], ["IV", 4],
            ["I", 1]
        ];

        let resNum = "";

        romanNumerals.forEach(([roman, value]) => {
            while (num >= value) {
                resNum += roman;
                num -= value;
            }
        });

        return resNum;
    }
    let resArr = [];

    numbers.forEach(x => {
        resArr.push(convertor(x));
    });
    return resArr;
}

console.log(romanizer([5, 62]));

console.log(romanizer([1994, 2014, 2018])); // [ "MCMXCIV", "MMXIV", "MMXVIII" ]