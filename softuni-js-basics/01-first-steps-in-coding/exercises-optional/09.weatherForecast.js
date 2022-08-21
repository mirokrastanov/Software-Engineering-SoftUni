function weatherForecast(input) {
    let weatherInput = input[0];
    
    if (weatherInput == "sunny") {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }
}

weatherForecast(["sunny"]);
weatherForecast(["cloudy"]);
weatherForecast(["snowy"]);