function solve(input) {

    console.log(input);
    console.log(input.fill(0, 2, 4));
    console.log(input.fill(5, 1));
    console.log(input.fill(6));
    console.log([input, input]);
    console.log([...input, ...input]);
    console.log(input.concat(input));
    console.log([[1, 2, 3, 4, 5, 65], [40, 43, 4]]);
    console.log([[[1, 2], [1, 2], [1, 2], [1, 2]], [1, 2], [1, 2]]);
    console.log('check');
    console.log({
        name: { skill: "Carpenter" },
        ame: { skill: "Carpenter", silel: "Carpenter", sklokjill: "Carpenter" },
        me: { skill: "Carpenter" },
        aname: { skill: "Carpenter" },
        amname: { skill: "Carpenter" },
        namname: { skill: "Carpenter" },
        gngname: { skill: "Carpenter" },
    });



}

// solve([1, 2, 3, 4]);
solve([1, 2, 3, 4, 5, 6, 7, 8, 9]);
