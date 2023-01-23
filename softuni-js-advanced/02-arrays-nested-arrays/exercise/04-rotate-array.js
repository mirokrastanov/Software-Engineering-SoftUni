function rotateArr(arr, rotations) {

    if (rotations > arr.length) {
        rotations %= arr.length;
    }
    for (let i = 0; i < rotations; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }

    console.log(arr.join(" "));
}

rotateArr(['1',
    '2',
    '3',
    '4'],
    2);
rotateArr(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);