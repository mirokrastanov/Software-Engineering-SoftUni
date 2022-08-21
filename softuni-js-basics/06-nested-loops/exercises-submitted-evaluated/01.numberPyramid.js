function numberPyramid(input) {
    let end = Number(input);
    let buffer = "";
    let current = 1;
    let flag = false;

    for (let row = 1; row <= end; row++) {
        for (let col = 1; col <= row; col++) {
            buffer += `${current} `;
            current++;
            if (current > end) {
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
        buffer += `\n`;
    }
    console.log(buffer);

}

numberPyramid(["7"]);
numberPyramid(["12"]);
numberPyramid(["15"]);
