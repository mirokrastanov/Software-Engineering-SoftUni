function cats(input) {
    let catsArr = input.slice();
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        };
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    };

    while (catsArr.length > 0) {
        let cat = catsArr.shift();
        let [name, age] = cat.split(" ");
        let currentCat = new Cat(name, age);
        currentCat.meow();
    }

}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);