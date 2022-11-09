function classLaptop() {
    class Laptop {
        constructor(info, quality) {
            this.info = {
                producer: info.producer,
                age: info.age,
                brand: info.brand,
            };
            this.quality = quality;
            this.isOn = false;
            this.price = this.getterPrice();
        };
        turnOn() {
            this.isOn = true;
            this.quality--;
            this.getterPrice();
        };
        turnOff() {
            this.isOn = false;
            this.quality--;
            this.getterPrice();
        };
        showInfo() {
            return JSON.stringify(this.info);
        };
        getterPrice() {
            this.price = Number(800 - (this.info.age * 2) + (this.quality * 0.5));
        }
    };


    let info = { producer: "Dell", age: 2, brand: "XPS" }
    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()
    console.log(laptop.isOn)
    console.log(laptop.price)

    // let info = { producer: "Lenovo", age: 1, brand: "Legion" }
    // let laptop = new Laptop(info, 10)
    // laptop.turnOn()
    // console.log(laptop.showInfo())
    // laptop.turnOff()
    // laptop.turnOn()
    // laptop.turnOff()
    // console.log(laptop.isOn)
}

classLaptop();