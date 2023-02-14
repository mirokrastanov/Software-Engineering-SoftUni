class Cat {
    constructor(name) {
        this.name = name;
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