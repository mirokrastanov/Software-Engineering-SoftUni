let person = {
    name: 'Pesho',
    age: 20,
};


let allPropertiesofProperties = Object.getOwnPropertyDescriptors(person);

let internalNameProperties = Object.getOwnPropertyDescriptor(person, 'name');
console.log(internalNameProperties);

// modify existing internal property
Object.defineProperty(person, 'name', { enumerable: false });
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(person.name);

// add new internal property
Object.defineProperty(person, 'height', { value: 190, enumerable: true });
console.log(person.height);


for (const key in person) {
    console.log(key);
}
Object.keys(person).forEach(x => console.log(x));
console.log(person);
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(JSON.stringify(person));

// cannot change value of a property with an internal property writable = false
Object.defineProperty(person, 'height', { value: 190, enumerable: true, writable: false });
console.log(JSON.stringify(person));
person.height = 192;
console.log(person.height); // still 190, when its non-writable

// lock internal properties of an object property - non-configurable
Object.defineProperty(person, 'height', { configurable: false });
// Object.defineProperty(person, 'height', { writable: true });      //=> ERROR!
// Object.defineProperty(person, 'height', { configurable: true });  //=> ERROR!
delete person.height;                                                //=> NO error, but it does NOT work
console.log(person);
console.log(person.height);

// this only thing that works, after setting the property to non-configurable
Object.defineProperty(person, 'height', { writable: false }); // works
Object.defineProperty(person, 'height', { writable: false }); // still works, but does NOT effectively do anything...

// changes to other object properties are working
Object.defineProperty(person, 'age', { value: 21 });
console.log(person);
console.log(person.age);

Object.defineProperties(person, {
    name: {
        enumerable: true,
        configurable: true,
        value: 'Gosho',
    },
    age: {
        value: 22,
        writable: true,
    }
});
console.log(person);

Object.defineProperty(person, 'info', {
    get: function () {  // cannot be arrow, as this would return undefined
        return `${this.name} - ${this.age} - H: ${this.height}`
    },
    set: function(value) {
        let [name, ageText] = value.split(' - ');
        this.name = name;
        this.age = Number(ageText);
    }
});
console.log(Object.getOwnPropertyDescriptor(person, 'info'));
console.log(person);
console.log(person.info);
person.info = 'Johny - 31';
console.log(person);
console.log(person.info);