function basketballEquipment(input) {
    let sneakers = Number(input[0]) * 0.60;
    let clothing = sneakers * 0.80;
    let basketball = clothing * 0.25;
    let accessories = basketball * 0.20;
    let costs = Number(input[0]) + sneakers + clothing + basketball + accessories;

    console.log(costs);
}

basketballEquipment(["365"]);
basketballEquipment(["550"]);
