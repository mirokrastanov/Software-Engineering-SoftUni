function attachEvents() {
    let forecast = document.querySelector('#forecast');
    let input = document.querySelector('#location');
    let current = document.querySelector('#current');
    let upcoming = document.querySelector('#upcoming');
    let submitBtn = document.querySelector('#submit');
    let symbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;',
    };
    let errorDiv = create('h1', ['error'], 'Error');
    
    submitBtn.addEventListener('click', onClick);
    async function onClick() {
        if (current.querySelectorAll('div').length > 1) {
            current.removeChild(current.querySelector('div:nth-of-type(2)'));
            upcoming.removeChild(upcoming.querySelector('.forecast-info'));
        }
        let response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
        if (!response) {
            forecast.style.display = 'block';
            forecast.appendChild(errorDiv);
            return;
        } else {
            forecast.style.display = 'none';
            if (forecast.querySelector('.error')) {
                forecast.removeChild(forecast.querySelector('.error'));
            }
        }
        let data = await response.json();
        data.forEach(async (loc) => {
            // console.log(loc);
            if (loc.name == input.value) {
                let todayRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${loc.code}`);
                let todayData = await todayRes.json();
                let elForecasts = create('div', ['forecasts']);
                let elSymbol = create('span', ['condition', 'symbol'], symbols[todayData.forecast.condition]);
                let elCondition = create('span', ['condition']);
                let elName = create('span', ['forecast-data'], todayData.name);
                let elDeg = create('span', ['forecast-data'], `${todayData.forecast.low}${symbols['Degrees']}/${todayData.forecast.high}${symbols['Degrees']}`);
                let elfinal = create('span', ['forecast-data'], todayData.forecast.condition);
                elCondition.appendChild(elName);
                elCondition.appendChild(elDeg);
                elCondition.appendChild(elfinal);
                elForecasts.appendChild(elSymbol);
                elForecasts.appendChild(elCondition);
                current.appendChild(elForecasts);
                // upcoming below
                let upcomingRes = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${loc.code}`);
                let upcomingData = await upcomingRes.json();
                let elInfo = create('div', ['forecast-info']);
                upcomingData.forecast.forEach(day => {
                    let elUpcoming = create('span', ['upcoming']);
                    let upSymbol = create('span', ['symbol'], symbols[day.condition]);
                    let upDeg = create('span', ['forecast-data'],`${day.low}${symbols['Degrees']}/${day.high}${symbols['Degrees']}`);
                    let upFinal = create('span', ['forecast-data'], day.condition);
                    elUpcoming.appendChild(upSymbol);
                    elUpcoming.appendChild(upDeg);
                    elUpcoming.appendChild(upFinal);
                    elInfo.appendChild(elUpcoming);
                });    
                upcoming.appendChild(elInfo);

                if (forecast.querySelector('.error')) {
                    forecast.removeChild(forecast.querySelector('.error'));
                }
                forecast.style.display = 'block';
            } else {
                forecast.style.display = 'block';
                forecast.appendChild(errorDiv);
            }
        });


    }
    function create(tag, classes = [], content) {
        let el = document.createElement(tag);
        if (classes) {
            classes.forEach(x => el.classList.add(x));
        }
        if (content) {
            el.innerHTML = content;
        }
        return el;
    }
}

attachEvents();