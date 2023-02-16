class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        let output = 'You successfully invite';
        let invited = 0;
        footballPlayers.forEach(player => {
            let [name, age, newValue] = player.split("/");
            let checker = [];
            this.invitedPlayers.forEach(x => checker.push(x[0]));
            if (checker.includes(name)) {
                let playerIndex = checker.indexOf(name);
                let currentValue = this.invitedPlayers[playerIndex][2];
                if (newValue > currentValue) this.invitedPlayers[playerIndex][2] = newValue;
            } else {
                invited++;
                this.invitedPlayers.push([name, age, newValue]);
                output += ` ${name},`;
            }
        });
        if (invited != 0) {
            output = output.split("");
            output.pop();
            output.push('.');
            return output.join("");
        }
        return '';
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/");
        let checker = [];
        this.invitedPlayers.forEach(x => checker.push(x[0]));
        if (checker.includes(name)) {
            let playerIndex = checker.indexOf(name);
            let currentValue = this.invitedPlayers[playerIndex][2];
            if (currentValue > playerOffer) {
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${Math.abs(currentValue - playerOffer)} million more are needed to sign the contract!`);
            } else {
                this.invitedPlayers[playerIndex][2] = 'Bought';
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
            }
        } else throw new Error(`${name} is not invited to the selection list!`);
    }
    ageLimit(name, limitAge) {
        let checker = [];
        this.invitedPlayers.forEach(x => checker.push(x[0]));
        if (checker.includes(name)) {
            let playerIndex = checker.indexOf(name);
            let currentAge = this.invitedPlayers[playerIndex][1];
            let diff = Math.abs(currentAge - limitAge);
            if (currentAge < limitAge) {
                if (diff <= 5) {
                    return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
                } else {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                }
            } else {
                return `${name} is above age limit!`;
            }
        } else {
            throw new Error(`${name} is not invited to the selection list!`)
        }
    }
    transferWindowResult() {
        let output = 'Players list:';
        let sorted = this.invitedPlayers.sort((a, b) => a[0].localeCompare(b[0]));
        sorted.forEach(player => {
            output += `\nPlayer ${player[0]}-${player[2]}`;
        });
        return output;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Lionel Messi is above age limit!
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.

let f2Team = new footballTeam("Barcelona", "Spain");
console.log(f2Team.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(f2Team.signContract("Kylian Mbappé/240"));
console.log(f2Team.ageLimit("Kylian Mbappé", 30));
console.log(f2Team.transferWindowResult());
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52