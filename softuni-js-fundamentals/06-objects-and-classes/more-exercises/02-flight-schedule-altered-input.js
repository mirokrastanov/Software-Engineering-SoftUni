function flightSchedule(input) {
    function filterArrays(inputArray) {
        for (let i = 0; i < inputArray.length; i++) {
            if (!(
                (inputArray[i].charCodeAt() > 47 && inputArray[i].charCodeAt() < 58) ||
                (inputArray[i].charCodeAt() > 64 && inputArray[i].charCodeAt() < 91) ||
                (inputArray[i].charCodeAt() > 96 && inputArray[i].charCodeAt() < 123)
            )) {
                inputArray.splice(i, 1);
                i--;
            }
        }
        return inputArray;
    }
    let workingArr = input.slice().shift().split("]");
    let allFlights = workingArr[0].split("");
    filterArrays(allFlights);
    
    // TODO another function to filter allFlights array and split the callSign and destination
    let changes = workingArr[1].split("");
    filterArrays(changes);

    // TODO another function to filter changes array and split the callSign and status
    let toCheck = workingArr[2].split("");
    filterArrays(toCheck);
    let roster = [];

    for (let i = 0; i < allFlights.length; i++) {
        let [callSign, destination] = allFlights[i].slice().split(" ");
        let flight = {
            callSign,
            destination,
            status: "Ready to fly",
        };
        roster.push(flight);
    }

    changes.forEach(element => {
        let [callSign, status] = element.slice().split(" ");
        for (let i = 0; i < roster.length; i++) {
            if (callSign == roster[i].callSign) {
                roster[i].status = status;
            }
        }
    });

    for (let i = 0; i < roster.length; i++) {
        switch (toCheck) {
            case "Ready to fly":
                roster.forEach(element => {
                    if (element.status == toCheck) {
                        let output = JSON.stringify(element);
                        output = JSON.parse(output);
                        delete output.callSign;
                        console.log(output);
                    }
                });
                break;
            default:
                if (roster[i].status == toCheck) {
                    let output = JSON.stringify(roster[i]);
                    output = JSON.parse(output);
                    delete output.callSign;
                    console.log(output);
                }
                break;
        }

    }

}

flightSchedule([
    '[["WN269 Delaware","FL2269 Oregon","WN498 Las Vegas","WN3145 Ohio","WN612 Alabama","WN4010 New York","WN1173 California","DL2120 Texas","KL5744 Illinois","WN678 Pennsylvania"],["DL2120 Cancelled","WN612 Cancelled","WN1173 Cancelled","SK430 Cancelled"],["Cancelled"]]'
]);

// let realInput = ([[
//     'WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'
// ], [
//     'DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'
// ], ['Cancelled']]);