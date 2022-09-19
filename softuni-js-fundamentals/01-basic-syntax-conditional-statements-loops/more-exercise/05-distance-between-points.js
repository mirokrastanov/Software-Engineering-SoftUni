function distanceBetweenPoints(x1, y1, x2, y2) {
    let xDiff = Math.abs(x1 - x2);
    let yDiff = Math.abs(y1 - y2);
    let xPow = Math.pow(xDiff, 2);
    let yPow = Math.pow(yDiff, 2);
    let distance = Math.sqrt(xPow + yPow);
    
    console.log(distance);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);