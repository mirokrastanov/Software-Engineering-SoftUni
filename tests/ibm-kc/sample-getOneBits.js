/*
 * Complete the 'getOneBits' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

function getOneBits(n) {
    const binary = n.toString(2);
    const binaryArray = binary.split('');
    // console.log(binaryArray);
    const quantityOfOne = binaryArray.slice(0).filter(x => x != '0').length;
    // console.log(quantityOfOne);
    const positions = [];
    binaryArray.forEach((x, i) => {
        x == '1' ? positions.push(i + 1) : null;
    });
    // console.log(positions);

    return [quantityOfOne, ...positions];
}

console.log('-- ', getOneBits(161));
console.log('-- ', getOneBits(8));