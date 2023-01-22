function negativePositiveNums(input) {
    let output = [];
    input.forEach(element => {
        if (element >= 0) {
            output.push(element)
        } else {
            output.unshift(element);
        }
    });
    let toPrint = "";
    output.forEach(element => {
        toPrint += `${element}\n`;
    });
    // console.log(toPrint.trim());
    return toPrint.trim();

}
negativePositiveNums([7, -2, 8, 9]);