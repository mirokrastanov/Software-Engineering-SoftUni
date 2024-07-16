console.log(typeof (() => 0)());
const obj1 = { skill: "JavaScript" };
const obj2 = { skill: "JavaScript" };
console.log(obj1 === obj2, !![], !!{});
console.log(['Mike'].push('Roksana'));

const arr = ['i1', 'i2', 'i3', 'i3'];

let forinRes = [];
for (let item in arr) {
    forinRes.push(item);
}
console.log(forinRes); // [ '0', '1', '2', '3' ]

let forofRes = [];
for (let item of arr) {
    forofRes.push(item);
}
console.log(forofRes); // ['i1', 'i2', 'i3', 'i3' ]
