function weatherForecast2(input) {
    let temp = Number(input[0]);

    if (temp >= 5) {
        if (temp <= 11.9) {
            console.log("Cold");
        } else if (temp <= 14.9) {
            console.log("Cool");
        } else if (temp <= 20) {
            console.log("Mild");
        } else if (temp <= 25.9) {
            console.log("Warm");
        } else if (temp <= 35) {
            console.log("Hot");
        } else {
            console.log("unknown");
        }
    } else {
        console.log("unknown");
    }

}

weatherForecast2(["16.5"]);
weatherForecast2(["8"]);
weatherForecast2(["22.4"]);
weatherForecast2(["26"]);
weatherForecast2(["0"]);
weatherForecast2(["17.9"]);
weatherForecast2(["68"]);
