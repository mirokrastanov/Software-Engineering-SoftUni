function birthdayParty(input) {
    let rent = Number(input); 
    // if there is only 1 input:
    // do NOT use (input[0]) 
    //        use (input)  ONLY , without index[0]
    // it works in VSC, but NOT in judge... :X
    
    let budget = 0;
    let cake = rent * 0.2;
    let drinks = cake * 0.55;
    let animator = rent / 3;
    budget = cake + drinks + animator + rent;
    
    console.log(budget);
    
}

birthdayParty(["2250"]);
birthdayParty(["3720"]);