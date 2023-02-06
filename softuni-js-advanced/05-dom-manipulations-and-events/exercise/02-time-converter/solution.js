function attachEventsListeners() {
    let mainElement = document.querySelector('main');
    let daysInput = document.querySelector('#days');
    let hoursInput = document.querySelector('#hours');
    let minutesInput = document.querySelector('#minutes');
    let secondsInput = document.querySelector('#seconds');

    mainElement.addEventListener('click', (e) => {
        let btnAttribute = e.target.getAttribute('id');
        let days = 0;
        if (btnAttribute == 'daysBtn') {
            days = Number(daysInput.value);
        } else if (btnAttribute == 'hoursBtn') {
            days = Number(hoursInput.value) / 24;
        } else if (btnAttribute == 'minutesBtn') {
            days = Number(minutesInput.value) / 1440;
        } else if (btnAttribute == 'secondsBtn') {
            days = Number(secondsInput.value) / 86400;
        }
        if (days != 0) {
            let outputArr = calc(days);
            daysInput.value = outputArr[0];
            hoursInput.value = outputArr[1];
            minutesInput.value = outputArr[2];
            secondsInput.value = outputArr[3];
        }
    });

    function calc(days) {
        return [days, (days * 24), (days * 1440), (days * 86400)];
    }
}