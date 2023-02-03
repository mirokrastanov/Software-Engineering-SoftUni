function solve(input) {

    // let output = input.split("").filter(a => a != "[" && a != "]").join("");
    // output = output.split('", "');

    let pattern = new RegExp(/(?<el>["][\w\d\s,-]+["])/, 'g');
    let matches = input.matchAll(pattern);
    Array.from(matches).forEach(element => {
        console.log(element.groups.el);
    });


    // console.log(output);

}

solve('["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]');
