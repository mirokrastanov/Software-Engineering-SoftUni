const uniqid = require('uniqid');
const cubes = [
    // 2 mock items 
    {
        id: '32l4hjikgb435kbhgo3ik',
        name: 'Rubic Classic',
        description: 'Evergreen',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0482/9177/4628/products/o3rmamdfu2kartbxpul9.jpg?v=1681761411',
        difficultyLevel: 3,
    },
    {
        id: 'p1mdsl4hj5m6p56pmpgok',
        name: 'Yarie',
        description: 'Hexagonal Rubic\'s Cube',
        imageUrl: 'https://m.media-amazon.com/images/I/61r6XfeM5HL.jpg',
        difficultyLevel: 6,
    },
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();
    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }
    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }
    return result;
};

exports.getOne = (cubeId) => cubes.find(cube => cube.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
}