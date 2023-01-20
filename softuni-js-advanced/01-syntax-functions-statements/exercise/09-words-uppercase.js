function wordsUppercase(input) {
    
    // multiline solution

    // let regExp = /[\w]+/g;
    // let matches = input.match(regExp);
    // if (matches) {
    //     matches = matches.map(a => a.toUpperCase());
    //     console.log(matches.join(", "));
    // }


    //one-liner solution
    console.log(input.match(/[\w]+/g) ? ((input.match(/[\w]+/g)).map(a => a.toUpperCase())).join(", ") : "");

}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
wordsUppercase('$436')