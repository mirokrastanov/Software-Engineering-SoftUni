function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let budgetReq = input[index];
    index++;
    let moneySaved = 0;
    let deposit = input[index];
    index++;
    
    while (destination !== "End") {
        while (moneySaved < budgetReq) {
            deposit = Number(deposit);
            moneySaved += deposit;
            if (moneySaved >= budgetReq) {
                console.log(`Going to ${destination}!`);
                break;
            }
            deposit = input[index];
            index++;
        }
        destination = input[index];
        index++;
        budgetReq = input[index];
        index++;
        deposit = input[index];
        index++;
        moneySaved = 0;
    }

}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);

