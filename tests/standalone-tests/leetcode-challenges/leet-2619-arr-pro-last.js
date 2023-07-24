Array.prototype.last = function () {
    let Le = this.length - 1;
    if (Le < 0) return Le;
    else return this[this.length - 1];
};


const arr = [1, 2, 3];
arr.last(); // 3

console.log([1, 2, 3].last());
console.log([].last());