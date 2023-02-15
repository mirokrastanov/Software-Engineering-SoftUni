class Animal {
    constructor(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log(`${this.name} makes GENERIC sound...`);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super('Cat', name, age); // super points to the constructor of Animal (the base constructor)
    }
    makeSound() {
        console.log(`${this.name} makes CAT sound... :)`);
    }
    purrr() {
        console.log(`${this.name} - purrr...`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super('Dog', name, age); // super points to the constructor of Animal (the base constructor)
    }
}

let firstAnimal = new Dog('Spike', 6);
console.log(firstAnimal);
// firstAnimal.purrr(); -- error
 
let firstCat = new Cat('Garry', 3);
console.log(firstCat);
firstCat.makeSound();
firstAnimal.makeSound();
firstCat.purrr();

console.log(Object.getPrototypeOf(Cat) == Animal);