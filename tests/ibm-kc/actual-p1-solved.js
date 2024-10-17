// SOLVED IN: 1h36min (2h02min, with refactoring) | ALLOWED TIME (for both tasks): 1h 


/*
* Complete the 'getRequestStatus' function below.
*
* The function is expected to return a STRING_ARRAY.
* The function accepts STRING_ARRAY requests as parameter.
*/

// notes
// 1 req every 1 sec
// MAX 2 SUCCESSFUL(status: 200) requests every  5 sec per address
// MAX 5 SUCCESSFUL(status: 200) requests every 30 sec per address
function getRequestStatus(requests) {
    function genStatus(boolean) {
        return boolean
            ? '{status: 200, message: OK}'
            : '{status: 429, message: Too many requests}';
    }
    function checkLastElements(arr, url, count) {
        const elements = arr.slice(- (count - 1)); // subtract 1 to account for the current element
        const limit = count == 5 ? 2 : 5;
        if (elements.length == 0 || !elements) return [true, 0];
        const matches = elements.slice().reduce((acc, val) => val[0] == url && val[1] ? acc + 1 : acc, 0);
        if (matches < limit) return [true, 0];
        return [false, matches];
    }
    const inputArray = requests.slice();
    const logArray = [];
    const outputArray = [];

    while (inputArray.length > 0) {
        const request = inputArray.shift();
        const last5 = checkLastElements(logArray, request, 5);
        const last30 = checkLastElements(logArray, request, 30);
        const check = last5[0] && last30[0];
        // console.log('5: ', last5, ' | ', '30: ', last30);

        if (check) outputArray.push(genStatus(true));
        else outputArray.push(genStatus(false));

        logArray.push([request, check]);
    }

    return outputArray;
}

const URLS = ['www.xyz.com', 'www.abc.com', 'www.pqr.com'];
const req9 = [URLS[0], URLS[1], URLS[0], URLS[2], URLS[1], URLS[0], URLS[0], URLS[1], URLS[0]];
const req50 = [
    URLS[1], URLS[0], URLS[2], URLS[2], URLS[1], URLS[0], URLS[1], URLS[0], URLS[2], URLS[0],
    URLS[2], URLS[1], URLS[1], URLS[0], URLS[1], URLS[2], URLS[2], URLS[1], URLS[0], URLS[0],
    URLS[2], URLS[1], URLS[0], URLS[2], URLS[1], URLS[0], URLS[2], URLS[2], URLS[0], URLS[1],
    URLS[1], URLS[2], URLS[0], URLS[1], URLS[1], URLS[2], URLS[0], URLS[2], URLS[0], URLS[1],
    URLS[1], URLS[2], URLS[0], URLS[2], URLS[1], URLS[0], URLS[2], URLS[0], URLS[1], URLS[2]
];
console.log(
    getRequestStatus(req9)
    //     getRequestStatus(req50)
);


// console.log(
//     getRequestStatus([
//         URLS[0], URLS[1], URLS[0], URLS[2], URLS[1], URLS[0], URLS[0], URLS[1], URLS[0]
//         //   0,       1,       2,       3,       4,       5,       6,       7,       8,
//         // True,   True,    True,    True,    True,    True,   False,    True,    True,
//         //                                                 (3rd - URLS[0])
//     ])
// );
