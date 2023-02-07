function attachEventsListeners() {
    let units = {
        m: 1,
        km: 1000,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };
    // givenValue * units['givenUnit'] = result in meters
    // meters / units['outputUnit'] = result in output unit

    let btn = document.querySelector('#convert');
    let inputNum = document.querySelector('#inputDistance');
    let inputUnit = document.querySelector('#inputUnits');
    let outputNum = document.querySelector('#outputDistance');
    let outputUnit = document.querySelector('#outputUnits');

    btn.addEventListener('click', () => {
        let input = Number(inputNum.value);
        let unit = inputUnit.value;
        input = input * units[unit];   
        let convertTo = outputUnit.value;
        outputNum.value = input / units[convertTo];
    });
}