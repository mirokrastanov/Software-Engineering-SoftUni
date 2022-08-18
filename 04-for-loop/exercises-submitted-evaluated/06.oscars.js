function oscars(input) {
    let actor = String(input[0]);
    let initialPts = Number(input[1]);
    //   let judges = Number(input[2]);
    let judgeName = "";
    let judgePtsPer = 0;
    let totalPts = initialPts;
    let judgeTotalPts = 0;
    
    for (let i = 3; i < input.length; i += 2) {
        judgeName = String(input[i]);
        judgePtsPer = Number(input[i + 1]);
        judgeTotalPts = ((judgePtsPer * judgeName.length) / 2);
        totalPts += judgeTotalPts;
        if (totalPts > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPts.toFixed(1)}!`);
            break;
        }
    }
    let ptsDiff = Math.abs(1250.5 - totalPts);
    if (totalPts <= 1250.5) {
        console.log(`Sorry, ${actor} you need ${ptsDiff.toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]);

