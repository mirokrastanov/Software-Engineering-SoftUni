function sumFirstLast(input) {

    if (input) {
        input = input.map(Number);
        return input[0] + input[input.length - 1];
    }

}

sumFirstLast(['20', '30', '40']);