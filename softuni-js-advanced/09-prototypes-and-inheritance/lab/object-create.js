let cat = {
    name: 'Generic Cat Name',
    makeSound() {
        console.log(`${this.name} - meow...`);
    },
}
let navcho = Object.create(cat); // create a new EMPTY object and sets its prototype to be 'cat'

console.log(navcho); // {}   empty

navcho.makeSound(); // Navcho - meow...  works as 'cat' is a prototype of 'navcho'
console.log(cat == navcho.__proto__); // the prototype of navcho is a reference to cat
console.log(navcho.name);
navcho.name = 'New Name';
console.log(navcho.name);

console.log(navcho.hasOwnProperty('makeSound')); // navcho doesn't have a method makeSound
console.log(navcho.__proto__.hasOwnProperty('makeSound')); // but its prototype has 
console.log(navcho.__proto__.__proto__); // the default prototype in JS --> the Object is the main prototype for each chain in JS


console.log('-------for in iteration--------');
for (const key in navcho) {
    console.log(key);
}
// foin iterates through navcho's keys, but ALSO through its prototype's keys
console.log('-------for in iteration*** (only in obj)--------');
for (const key in navcho) {
    if (Object.hasOwnProperty.call(navcho, key)) {
        console.log(key);
    }
}
for (const key in navcho) {
    if (Object.hasOwnProperty(key)) {
        console.log(key);
    }
}