let person = {
    name: 'Pesho',
    age: 20,
    height: 190,
};

let clonedPerson = { ...person };
// let clonedPerson = Object.assign({}, person);   //=> same as above

Object.freeze(person);
console.log(Object.getOwnPropertyDescriptors(person));

person.weight = 90;
person.name = 'Gosho';
console.log(person);

Object.seal(clonedPerson);
console.log(Object.getOwnPropertyDescriptors(clonedPerson));
console.log(clonedPerson);
clonedPerson.name = 'Stan';
console.log(clonedPerson);


const constantObj = {
    prop: 'value',
}

constantObj.prop = 'newValue'; // can change the properties inside
console.log(constantObj);
// constantObj = { prop: 'new ref' }; // can't change the reference
