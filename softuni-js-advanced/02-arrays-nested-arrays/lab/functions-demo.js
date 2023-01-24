function master(input) {


    console.log('pure input', input);
    console.log('some() ->', input.some(e => e % 8 == 0));
    console.log('find() ->', input.find(e => e % 8 == 0));
    console.log('filter() ->', input.filter(e => e % 8 == 0));
    console.log('every() ->', input.every(e => e % 8 == 0));
    console.log(input);





}

master([13, 22, 36, 40, 53, 61]);
