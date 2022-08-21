function bestPlayer(input) {
    let index = 0;
    let name = input[index];
    index++;
    let winner = "";
    let mostGoals = 0;

    while (name !== "END") {
        let goals = Number(input[index]);
        index++;
        if (goals >= 10) {
            mostGoals = goals;
            winner = name;
            console.log(`${winner} is the best player!`);
            if (mostGoals >= 3) {
                console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
            } else {
                console.log(`He has scored ${mostGoals} goals.`);
            }
            return;
        }
        if (goals > mostGoals) {
            mostGoals = goals;
            winner = name;
        }
        name = input[index];
        index++;
    }
    console.log(`${winner} is the best player!`);
    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }
}

bestPlayer(["Neymar", "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"]);
bestPlayer(["Silva",
    "5",
    "Harry Kane",
    "10"]);
bestPlayer(["Rooney",
    "1",
    "Junior",
    "2",
    "Paolinio",
    "2",
    "END"]);
bestPlayer(["Petrov",
    "2",
    "Drogba",
    "11"]);
bestPlayer(["Zidane",
    "1",
    "Felipe",
    "2",
    "Johnson",
    "4",
    "END"]);



