function extractSubsequence(input) {
    let output = [];
    let greatest = Number.MIN_SAFE_INTEGER;

    input.forEach(element => {
        if (element >= greatest) {
            greatest = element;
            output.push(element);
        }
    });
    // console.log(output);
    return output;
}

extractSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);