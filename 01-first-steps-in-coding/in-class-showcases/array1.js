function solve(){
    let arr = ["Todor", "Gosho", "Pesho"];
    
    console.table(arr);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr.length)

}

solve();

//same as above, but this is the prefered way to type it from now on >>>
function solve1(arr){
    
    console.table(arr);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr.length)

}

solve1(["Todor", "Gosho", "Pesho"]);