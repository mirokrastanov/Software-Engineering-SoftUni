function sequences(input) {
    let masterArr = input.slice();
    let uniqueArr = [];
    let temp = [];

    for (let i = 0; i < masterArr.length; i++) {
        let current = masterArr[i].slice().split(" ");
        let updated = [];
        for (let j = 0; j < current.length; j++) {
            let el = current[j].split("");
            el = el.filter(a => a != ",");
            el = el.filter(a => a != "[");
            el = el.filter(a => a != "]");
            el = el.join("");
            el = Number(el);
            updated.push(el);
        }
        temp.push(updated);
    }
    masterArr = temp.slice();
    temp = [];

    for (let i = 0; i < masterArr.length; i++) {
        let current = masterArr[i];
        current.sort((a, b) => b - a);
        temp.push(current);
    }
    masterArr = temp.slice();
    temp = [];

    let arr1 = masterArr[0];
    for (let j = 1; j < masterArr.length; j++) {
        let flag = false;
        let arr2 = masterArr[j];
        let loops = arr1.length >= arr2.length ? arr2.length : arr1.length;
        for (let el = 0; el < loops; el++) {
            if (arr1[el] != arr2[el]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            masterArr[j] = "toREMOVE";
        }
    }

    uniqueArr = masterArr.filter(a => a != "toREMOVE");
    uniqueArr = uniqueArr.sort((a, b) => a.length - b.length);

    let output = "[";
    uniqueArr.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            output += `${element[i]}`;
            if (i < element.length - 1) {
                output += `, `;
            } else {
                output += "]";
            }
        }
        console.log(output);
        output = "[";
    });


}

sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);
sequences([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]);