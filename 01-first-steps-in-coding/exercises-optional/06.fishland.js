function fishland(input) {
    let mackerelPrice = Number(input[0]);
    let spratsPrice = Number(input[1]);
    let bonitoWeight = Number(input[2]);
    let scadfishWeight = Number(input[3]);
    let clamWeight = Number(input[4]);

    let bonitoPrice = 1.60 * mackerelPrice;
    let scadfishPrice = 1.80 * spratsPrice; 
    let clamPrice = 7.50;

    let bonito = bonitoPrice * bonitoWeight;
    let scadfish = scadfishPrice * scadfishWeight;
    let clams = clamPrice * clamWeight;

    let total = bonito + scadfish + clams;
    total = total.toFixed(2);

    console.log(total);
}

fishland(["6.90", "4.20", "1.5", "2.5", "1"]);
fishland(["5.55", "3.57", "4.3", "3.6", "7"]);
