function prevDay(year, month, day) {

    const startDay = new Date();
    startDay.setDate(day);
    startDay.setMonth(month - 1);
    startDay.setFullYear(year);
    
    const endDay = startDay;
    endDay.setDate(startDay.getDate() - 1);
    console.log(`${endDay.getFullYear()}-${(endDay.getMonth() + 1)}-${endDay.getDate()}`);

}

prevDay(2016, 9, 30);
prevDay(2015, 5, 10);