function solution() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = Number(gasWeight);
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, Number(gasWeight));
            this.ribbonColor = ribbonColor;
            this.ribbonLength = Number(ribbonLength);
            this._ribbon = {
                color: ribbonColor,
                length: Number(ribbonLength),
            };
        }
        get ribbon() {
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, Number(gasWeight), ribbonColor, Number(ribbonLength));
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}

let classes = solution();
// console.log(classes);
let testBalloon = new classes.Balloon("yellow", 20.5);
console.log(testBalloon); // Balloon {color: 'yellow', hasWeight: 20.5}
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
console.log(testPartyBalloon); // PartyBalloon {color: 'yellow', gasWeight: 20.5, _ribbon: {color: 'red', length: 10.25}}
let ribbon = testPartyBalloon.ribbon;
console.log(ribbon); // {color: 'red', length: 10.25}
let testBBalloon = new classes.BirthdayBalloon("yellow", 20.5, "red", 10.25, "sample text here...");
console.log(testBBalloon);