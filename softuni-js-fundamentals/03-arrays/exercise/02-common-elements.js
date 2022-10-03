function commonElements(array1, array2) {

    for (let i = 0; i < array1.length; i++) {
        let currentElementArr1 = array1[i];
        for (let j = 0; j < array2.length; j++) {
            let currentElementArr2 = array2[j];
            if (currentElementArr1 === currentElementArr2) {
                console.log(currentElementArr1);
            }
        }
    }


}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
// commonElements(
//     ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
//     ['s', 'o', 'c', 'i', 'a', 'l']
// );