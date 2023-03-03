function getInfo() {
    let btn = document.querySelector('#submit');
    let stopName = document.querySelector('#stopName');
    let buses = document.querySelector('#buses');

    let id = document.querySelector('#stopId');
    let url = `http://localhost:3030/jsonstore/bus/businfo/${id.value}`;
    stopName.textContent = 'Loading...';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            stopName.textContent = data.name;
            buses.replaceChildren();
            Object.entries(data.buses).forEach(bus => {
                let li = document.createElement('li');
                li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
                buses.appendChild(li);
            });
        })
        .catch(error => {
            buses.replaceChildren();
            stopName.textContent = 'Error';
        });

}