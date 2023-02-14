class Cat {
    static legNumber = 4;
    isHungry = true; 
    constructor(name) {
        this.name = name;

    }

    meow() {
        console.log(`${this.name}: Meow!`);
    }
    static vetCheck(cat) {
        if (cat.isHungry) {
            console.log('This cat should be fed!');
        } else {
            console.log('Cat is fed.');
        }
    }
}

let cat = new Cat('Spok');
cat.meow();
// cat.vetCheck();  // not working like this
Cat.vetCheck(cat);  // this works as we call it on the Class and give it the particular one we need as a parameter

// static method
Cat.vetCheck(cat);
// static member/property
console.log(cat.legNumber); // not working
console.log(Cat.legNumber); // works as it is called on the Class, not on an instance of it
