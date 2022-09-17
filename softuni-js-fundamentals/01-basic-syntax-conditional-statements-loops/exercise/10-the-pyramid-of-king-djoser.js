function pyramid(base, increment) {
    let stoneTotal = 0;
    let marbleTotal = 0;
    let lapisLazuliTotal = 0;
    let goldTotal = 0;
    let width = base;
    let length = base;
    let height = 0;
    let rows = 0;
    for (let limit = 1; limit <= base; limit += 2) {
        rows++;
    }
    for (let row = 1; row <= rows; row++) {
        let blockQuantity = width * length;
        let stone = 0;
        let marble = 0;
        let lapisLazuli = 0;
        let gold = 0;
        height += increment;
        if (row % 5 == 0 && row != rows) {
            stone = (width - 2) * (length - 2);
            lapisLazuli = (blockQuantity - stone);
            stoneTotal += (stone * increment);
            lapisLazuliTotal += (lapisLazuli * increment);
        } else if (row == rows) {
            gold = blockQuantity;
            goldTotal += (gold * increment);
        } else {
            stone = (width - 2) * (length - 2);
            marble = (blockQuantity - stone);
            stoneTotal += (stone * increment);
            marbleTotal += (marble * increment);
        }
        width -= 2;
        length -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stoneTotal)}`);
    console.log(`Marble required: ${Math.ceil(marbleTotal)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliTotal)}`);
    console.log(`Gold required: ${Math.ceil(goldTotal)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

pyramid(11, 1);