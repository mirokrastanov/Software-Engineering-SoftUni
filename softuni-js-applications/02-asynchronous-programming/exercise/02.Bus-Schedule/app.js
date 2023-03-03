function solve() {
    let label = document.querySelector('#info span');
    let departBtn = document.querySelector('#depart');
    let arriveBtn = document.querySelector('#arrive');

    let nextStop = {
        next: 'depot',
    };

    async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${nextStop.next}`;
        let response = await fetch(url);
        if (response.status != 200) {
            label.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
        let data = await response.json();
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        nextStop = data;
        label.textContent = `Next stop ${nextStop.name}`;
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        label.textContent = `Arriving at ${nextStop.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();