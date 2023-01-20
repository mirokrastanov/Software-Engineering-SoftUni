function validity(x1, y1, x2, y2) {

    function calc(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
    
    let numberPool = {
        1: [x1, y1, 0, 0],
        2: [x2, y2, 0, 0],
        3: [x1, y1, x2, y2],
    };

    Object.values(numberPool).forEach(element => {
        let isValid;
        let result = calc(...element);
        if (result == Math.floor(result)) {
            isValid = "valid";
        } else {
            isValid = "invalid"
        }
        console.log(`{${element[0]}, ${element[1]}} to {${element[2]}, ${element[3]}} is ${isValid}`);
    });
}

validity(3, 0, 0, 4);
validity(2, 1, 1, 1);