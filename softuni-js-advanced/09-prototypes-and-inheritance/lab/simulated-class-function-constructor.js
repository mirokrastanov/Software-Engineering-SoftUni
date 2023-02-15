function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;

    // *** this will create a function for each instance --> not memory optimal
    // this.greeting = function() {
    //     console.log(`Hello, My name is ${this.name} and I'm ${this.age} years old.`);
    // }
}
// the correct way to add a method
Person.prototype.greeting = function () {
    console.log(`Hello, My name is ${this.name} and I'm ${this.age} years old.`);
}

let person = new Person('Pesho', 18, 190);
let person2 = new Person('John', 32, 170);

console.log(person);
console.log(person2);
console.log(person instanceof Person);
console.log(person2 instanceof Person);

// A Class is a Function creating an object with the help of the 'new' operator

person.greeting();
person2.greeting();
// console.log(person.greeting == person2.greeting); // *** false --> diff ref
console.log(person.greeting == person2.greeting); // true --> same ref
