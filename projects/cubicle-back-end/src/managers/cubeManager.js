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

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
}