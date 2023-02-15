function Cat(name, age) {
    this.name = name;
    this.age = age;
}
Cat.prototype.meow = function () {
    console.log(`${this.name} - meow...`);
}

// Using new keyword
let navcho = new Cat('nav', 7);
console.log(navcho);
navcho.meow();

function customNew(constuctor, first, second) {
    // 1. Create new object
    let obj = {};
    // 2. Set prototype of the object
    Object.setPrototypeOf(obj, constuctor.prototype);
    // 3. Call constructor
    constuctor.call(obj, first, second);
    // 4. Return create object
    return obj;
}

// Using custom new implementation
let navi = customNew(Cat, 'Navi', 8);
console.log(navi);
navi.meow();