function housePainting(input) {
    let greenSqmPerLiter = 3.4;
    let redSqmPerLiter = 4.3;

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let frontWall = (Math.pow(x, 2)) - (1.2 * 2);
    let frontRoof = ((x * h) / 2);
    let backWall = Math.pow(x, 2); 
    let backRoof = frontRoof;
    let roofSides = 2 * (x * y);
    let sideWalls = 2 * ((x * y) - (Math.pow(1.5, 2))); 
    
    let roofSqm = frontRoof + backRoof + roofSides;
    let roofPaint = roofSqm / redSqmPerLiter; 
    let wallSqm = frontWall + backWall + sideWalls;
    let wallPaint = wallSqm / greenSqmPerLiter;
  
    let greenPaint = (wallPaint).toFixed(2);
    let redPaint = (roofPaint).toFixed(2);

    console.log(greenPaint);
    console.log(redPaint);
    
}

housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.88"]);
