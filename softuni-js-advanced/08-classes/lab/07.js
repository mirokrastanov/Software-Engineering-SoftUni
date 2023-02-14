class Circle {
    constructor(radius) {
        this.radius = radius;
        this._perimeter = 2 * Math.PI * radius;
    }
    get area() {
        return Math.PI * this.radius ** 2;
    }
    set area(value) {
        if (value < 0) {
            throw new Error('Area cannot be less than 0');
        }
        this.radius = Math.sqrt(value / Math.PI);
    }
    get perimeter() {
        return this._perimeter;
    }
    set perimeter(value) {
        if (value < 0) {
            throw new Error('Perimeter cannot be less than 0')
        }
        this._perimeter = value;
    }
}

let circle = new Circle(2);
console.log(circle);
console.log(circle.area);

circle.radius = 3;
console.log(circle.area, 'get');
console.log(circle.radius, 'get');


circle.area = 12;
console.log(circle.radius, 'set');