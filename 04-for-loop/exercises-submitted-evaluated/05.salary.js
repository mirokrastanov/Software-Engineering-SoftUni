function salary(input) {
    let browserTabs = Number(input[0]);
    let salary = Number(input[1]);
    let website = "";
    for (let i = 2; i < input.length; i++) {
        website = String(input[i]);
        switch(website) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
            default: break;
        }
    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }

}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);
salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"]);
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]);


