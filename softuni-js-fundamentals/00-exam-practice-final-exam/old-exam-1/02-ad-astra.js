function adAstra(input) {
    let regExp = /(?<delimiter>[#|])(?<item>[A-Za-z\s]+)(\1)(?<exp>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})(\1)(?<calories>[0-9]{1,5})(\1)/g;    
    let str = input[0];
    let matches = str.matchAll(regExp);
    let totalCalories = 0;
    let output = "";

    if (matches) {
        for (let el of matches) {
            // console.log(el.groups);
            totalCalories += Number(el.groups.calories);
            output += `Item: ${el.groups.item}, Best before: ${el.groups.exp}, Nutrition: ${el.groups.calories}\n`;
        }
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    console.log(output.trim());
    
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);