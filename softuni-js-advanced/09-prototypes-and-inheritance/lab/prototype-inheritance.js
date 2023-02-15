function Animal(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
}
Animal.prototype.makeSound = function () {
    console.log(`${this.name} makes sound...`);
};

function Cat(name, age) {
    Animal.call(this, 'Cat', name, age);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.purrr = function() {
    console.log(`${this.name} - purrr...`);
}

console.log(Object.getPrototypeOf(Cat) == Object.getPrototypeOf(Animal));
console.log(Cat.__proto__ == Animal.__proto__);

let firstAnimal = new Animal('Dog', 'Spike', 6);
console.log(firstAnimal);
// firstAnimal.purrr(); --> error as the prototype of Car points to the prototype of Animal, but they do not hold the same reference
// Cat.prototype references to Animal.prototype -> so whatever Animal has, could be delegated to Cat, but Cat's methods cannot be 
// inherited up the chain

let firstCat = new Cat('Garry', 3);
console.log(firstCat);
firstCat.makeSound();
firstCat.purrr();

let secondCat = new Cat('Jake', 1); 
console.log(secondCat);
console.log(Object.keys(secondCat));
console.log(secondCat instanceof Cat);
console.log(secondCat instanceof Animal);
