function nextDay(year, month, date) {
    let d1 = new Date(Date.UTC(year, (month - 1), date));
    let d2 = new Date(Date.UTC(year, (month - 1), (date + 1)));
    
    let y2 = d2.getFullYear();
    let m2 = d2.getMonth();
    let dAte = d2.getDate();
    let result = `${y2}-${m2 + 1}-${dAte}`;

    console.log(result);

}

nextDay(2016, 9, 30);