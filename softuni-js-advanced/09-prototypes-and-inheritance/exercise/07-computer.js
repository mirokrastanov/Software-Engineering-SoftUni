function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = Number(responseTime);
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target == Computer) throw new Error('trying to instantiate an abstract class');
            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this._battery = battery;
        }
        get battery() {
            return this._battery;
        }
        set battery(value) {
            if (value instanceof Battery) this._battery = value;
            else throw new TypeError('trying to import an object that is not an instance of class Battery');
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this._keyboard = keyboard;
            this._monitor = monitor;
        }
        set keyboard(value) {
            if (value instanceof Keyboard) this._keyboard = value;
            else throw new TypeError('trying to import an object that is not an instance of class Keyboard');
        }
        get keyboard() {
            return this._keyboard;
        }
        set monitor(value) {
            if (value instanceof Monitor) this._monitor = value;
            else throw new TypeError('trying to import an object that is not an instance of class Monitor');
        }
        get monitor() {
            return this._monitor;
        }
    }
    return { Battery, Keyboard, Monitor, Computer, Laptop, Desktop }
}
let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
// console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
// console.log(laptop);
console.log(laptop.battery);
let testLaptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", { name: 1, age: 2 });
// console.log(testLaptop);
console.log(testLaptop._battery);