function hardWord(input) {
    let str = input[0];
    let arr = input[1];

    let template = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let nextChar = str[i + 1];
        if (char == "_") {
            template += char;
            if (nextChar != char) {
                let repWord = arr.filter(a => a.length == template.length).join("");
                str = str.replace(template, repWord);
                template = "";
            }
        } 
    }
    console.log(str);
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);