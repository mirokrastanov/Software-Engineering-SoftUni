function areaOfFigures(input) {
    let figure = input[0];
    let area = 0;
    let a = Number(input[1]);

    if (figure == "square") {
        area = Math.pow(a, 2);
    } else if (figure == "rectangle") {
        let b = Number(input[2]);
        area = a * b;
    } else if (figure == "circle") {
        area = (Math.pow(a, 2) * Math.PI);
    } else if (figure == "triangle") {
        let h = Number(input[2]);
        area = (a * h) / 2;
    }
    console.log(area.toFixed(3));
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
