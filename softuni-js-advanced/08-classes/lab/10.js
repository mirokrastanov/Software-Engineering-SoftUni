let map = new Map();
map.set('name', 'Pesho');
map.set('age', 20);
map.set('isMale', true);

console.log(map);
console.log(map.get('name'));
map.set('age', 21);
console.log(map);
console.log(map.size);

console.log(map.entries());
console.log(map.keys());
console.log(map.values());

map.set(true, 'Gosho');
console.log(map);
map.set(1, 'one');
console.log(map);
let obj = { name: 'Neksi' };
map.set(obj, 'Neksi\'s object');
console.log(map);
console.log(map.get(obj));

for (const kvp of map) {
    console.log(kvp[0], '-', kvp[1]);
}