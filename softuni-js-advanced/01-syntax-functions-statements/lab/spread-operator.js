const objA = {
    town: "Sofia",
    pop: 1500000,
};
console.log('A', objA);

const objB = {
    ...objA,
    chart: 54,
};
console.log('B', objB);

console.log('A', objA);