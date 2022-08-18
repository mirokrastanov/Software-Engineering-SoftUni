function clock(){
    let hour = 0;
    let min = 0;

    for (let i = 0; i <= 23; i++) {
        hour = i;
        for (let i = 0; i <= 59; i++) {
            min = i;
            console.log(`${hour}:${min}`);
        }
    }

}

clock();