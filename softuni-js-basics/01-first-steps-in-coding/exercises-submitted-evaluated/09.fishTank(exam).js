function fishTank(input) {
    let length = Number(input[0]) / 10;
    let width = Number(input[1]) / 10;
    let height = Number(input[2]) / 10;
    let percent = Number(input[3]) / 100;
    let volumeTotal = length * width * height;
    let volumeNotWater = volumeTotal * percent;
    let volumeWater = volumeTotal - volumeNotWater;
    console.log(volumeWater);
}

fishTank(["85", "75", "47", "17"]);
fishTank(["105", "77", "89", "18.5"]);
