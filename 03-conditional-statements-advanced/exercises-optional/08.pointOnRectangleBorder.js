function pointOnRectangleBorder(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    // rectangle diagonal point coords
    let x = Number(input[4]);
    let y = Number(input[5]);
    // point coords

    if (x1 < x2 && y1 < y2) {
        // guarantees that condition as required

        if ((x === x1 && y >= y1 && y <= y2) ||
            (x === x2 && y >= y1 && y <= y2) ||
            (y === y1 && x >= x1 && x <= x2) ||
            (y === y2 && x >= x1 && x <= x2)) {
            // Border - the point lies onto one of the sides of the rectangle
            console.log("Border");
        } else {
            console.log("Inside / Outside");
        }
    }

}

pointOnRectangleBorder(["2", "-3", "12", "3", "8", "-1"]);
pointOnRectangleBorder(["2", "-3", "12", "3", "12", "-1"]);



// WORKS FOR MORE PRECISE CASES in order to diferentiate between INSIDE & OUTSIDE.

// if (x1 < x2 && y1 < y2) {

//     if ((x === x1 && y >= y1 && y <= y2) ||
//         (x === x2 && y >= y1 && y <= y2) ||
//         (y === y1 && x >= x1 && x <= x2) ||
//         (y === y2 && x >= x1 && x <= x2)) {
//         // Border - the point lies onto one of the sides of the rectangle
//         console.log("Border");
//     } else if (x < x1 || x > x2 || y < y1 || y > y2) {
//         // Outside
//         console.log("Outside");
//     } else if (x > x1 && x < x2 && y > y1 && y < y2) {
//         // Inside
//         console.log("Inside");
//     }

// }