function roadRadar(speed, areaType) {
    let limit;
    switch (areaType) {
        case "motorway": limit = 130; break;
        case "interstate": limit = 90; break;
        case "city": limit = 50; break;
        case "residential": limit = 20; break;
    }
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status;
        let over = speed - limit;
        if (over > 40) {
            status = 'reckless driving';
        } else if (over > 20) {
            status = 'excessive speeding';
        } else {
            status = 'speeding';
        }
        console.log(`The speed is ${over} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');