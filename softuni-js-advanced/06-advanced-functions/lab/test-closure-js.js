function main() {
	let obj = {};
	let counter = 0;
	return (input) => {
		obj[`key${counter}`] = Number(input);
		counter++;
		return obj;
	}
}
let copy = main();
console.log(copy('35')); // { key0: 35 }
console.log(copy('17')); // { key0: 35, key1: 17 }
console.log(copy('4')); // { key0: 35, key1: 17, key2: 4 }