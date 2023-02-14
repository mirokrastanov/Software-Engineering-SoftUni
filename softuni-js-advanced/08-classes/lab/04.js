class Cat {
    isHungry = true; // this is better than below, as this sets is as a default PROPERTY
    constructor(name) {
        this.name = name;
        // this.isHungry = true;  // dynamically set if it depends on parameters coming in
    }

    meow() {
        console.log(`${this.name}: Meow!`);
    }
}

let firstCat = new Cat('Poohcho');
let secondCat = new Cat('Garry');

console.log(firstCat, firstCat.name, typeof firstCat);
console.log(secondCat);

firstCat.meow();
secondCat.name = 'Spok';
console.log(secondCat);

let catNames = [
    'Spike',
    'Jonhy',
    'Freddy',
    'Sam',
    'Hankie',
];
let cats = catNames.map(x => new Cat(x));
console.log(cats);
cats.forEach(x => x.meow());

console.log(firstCat instanceof Cat);
console.log(firstCat instanceof Object);

class Dog {

}

let firstDog = new Dog();
console.log(firstDog instanceof Cat);