"use strict";
let id = 5;
let company = 'My company';
let isPublished = true;
let x = 'Hello';
x = 35;
let age;
age = 25;
let ids = [1, 2, 3, 4, 5]; // type of the values inside and then the [] to def the array
let arr = [1, true, 'test'];
// Tuple
let person = [1, 'Brad', true]; // the order should be followed
// Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
let pid;
pid = 22;
pid = '2';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 3] = "Up";
    Direction1[Direction1["Down"] = 4] = "Down";
    Direction1[Direction1["Left"] = 5] = "Left";
    Direction1[Direction1["Right"] = 6] = "Right";
})(Direction1 || (Direction1 = {}));
;
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
// Objects
const user = {
    id: 1,
    name: 'John',
};
const user2 = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 5));
function log(message) {
    console.log(message);
}
console.log(log('test text'));
;
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name, credential) {
        this.id = id;
        this.name = name;
        this.credential = credential;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad', 'ighdwa');
const mike = new Person(2, 'Mike', 'iuyorje');
console.log(brad.register());
