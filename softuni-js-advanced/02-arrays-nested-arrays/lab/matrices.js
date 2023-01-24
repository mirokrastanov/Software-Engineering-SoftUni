function matrices(master) {

    console.log(master);
    master.forEach(row => {
        let output = "";
        row.forEach(cell => {
            output += `${cell} `; 
        });
        console.log(output);
    });

    for (const row of master) {
        for (const el of row) {
            console.log(el);
        }
    }

    

    // console.log(master);
    // console.log(master);




}

matrices([
    [4, 5, 6, 2],
    [6, 5, 4, 3],
    [5, 5, 5, 7]
]);