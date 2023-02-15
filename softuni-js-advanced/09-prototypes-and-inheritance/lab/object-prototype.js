let person = {
    name: 'Pesho',
    age: 20,
    height: 190,
};

let personPrototype = Object.getPrototypeOf(person);
console.log(personPrototype);
personPrototype.weight = 90;

console.log(person); // person does NOT have a property weight
console.log(person.weight); // BUT person is linked to its prototype and the prototype HAS that, so it delegates it to the person object
console.log(personPrototype);

console.log(person == personPrototype); // false --> diff obj with diff refs
console.log(person.__proto__ == personPrototype); // true 
console.log(Object.getPrototypeOf(person) == personPrototype); // true
console.log(Object.getPrototypeOf(person));


