function rectangle(width, height, color) {

    function calcArea() {
        return width * height;
    }

    color = color.split("");
    color[0] = color[0].toUpperCase();
    color = color.join("");

    return {
        width,
        height,
        color,
        calcArea,
    }
}

let rect = rectangle(4, 5, 'red');
// let rect = rectangle(4, 5);
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
