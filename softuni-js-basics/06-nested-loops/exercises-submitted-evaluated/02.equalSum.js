function equalSum(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let buffer = "";


    for (let i = start; i <= end; i++) {
        let current = String(i);
        let even = 0;
        let odd = 0;
        for (let pos = 0; pos < current.length; pos++) {
            if (pos % 2 === 0) {
                even += Number(current[pos]);
            } else {
                odd += Number(current[pos]);
            }
        }
        if (odd === even) {
            buffer += `${current} `;
        }
    }
    console.log(buffer);

}

equalSum(["100000", "100050"]);
equalSum(["123456", "124000"]);
equalSum(["299900", "300000"]);
equalSum(["100115", "100120"]);