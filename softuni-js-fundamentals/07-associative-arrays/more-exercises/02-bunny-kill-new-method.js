function bunnyKill(inputArr) {
    // IN PROGRESS...... TODO -> use matrix[r][c]
    let temp = [];
    let workingArr = inputArr.slice();
    let bombArr = workingArr.pop().split(" ");
    let horizontalL = workingArr.slice().shift().split(" ").length;
    let verticalL = workingArr.length;
    let snowballKills = 0;
    let snowballDamage = 0;

    let hanger = [];
    while (workingArr.length > 0) {
        temp = workingArr.shift().split(" ");
        for (let i = 0; i < temp.length; i++) {
            hanger.push(temp[i]);
        }
        temp = [];
    }
    hanger = hanger.map(Number);
    let bombArrLength = bombArr.length;
    for (let i = 1; i <= bombArrLength; i++) {
        let currentBomb = bombArr.shift().split(",");
        let bombRow = Number(currentBomb.shift());
        let bombColumn = Number(currentBomb.shift());
        if (bombRow < 0 || bombRow > verticalL || bombColumn < 0 || bombColumn > horizontalL) {
            continue;
        }
        let bombIndex = Number(bombColumn + bombRow * horizontalL);
        let bombValue = Number(hanger[bombIndex]);
        if (bombValue == 0) {
            continue;
        }
        snowballDamage += bombValue;
        snowballKills++;
        for (let cell = 0; cell < hanger.length; cell++) {
            if (
                cell == bombIndex || cell == bombIndex - 1 || cell == bombIndex + 1 ||
                cell == bombIndex - horizontalL || cell == bombIndex + horizontalL ||
                cell == bombIndex - horizontalL - 1 || cell == bombIndex + horizontalL + 1 ||
                cell == bombIndex - horizontalL + 1 || cell == bombIndex + horizontalL - 1
            ) {
                if (
                    (bombIndex % horizontalL == 0 && cell == bombIndex + horizontalL - 1) ||
                    (bombIndex % horizontalL - 1 == 0 && cell == bombIndex - horizontalL + 1) ||
                    (bombIndex % (horizontalL - 1) == 0 && cell == bombIndex - horizontalL + 1)
                ) {
                    continue;
                }
                let cellValue = Number(hanger[cell]);
                if (cellValue <= bombValue) {
                    hanger[cell] = 0;
                } else {
                    cellValue -= bombValue;
                    hanger[cell] = cellValue;
                }
            }
        }
    }
    for (let m = 0; m < hanger.length; m++) {
        let cell = Number(hanger[m]);
        if (cell > 0) {
            snowballDamage += cell;
            snowballKills++;
            cell = 0;
            hanger[m] = cell;
        }
    }
    console.log(snowballDamage);
    console.log(snowballKills);

}

bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10', '2,2 0,1']);

// bunnyKill([
//     '10 10 10',
//     '10 10 10',
//     '10 10 10', '0,0']);

// bunnyKill([
//     '10 100 100',
//     '100 100 100',
//     '100 100 100', '0,0 2,2']);
