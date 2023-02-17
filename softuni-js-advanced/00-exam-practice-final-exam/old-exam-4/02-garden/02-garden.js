class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable - spaceRequired <= 0) throw new Error('Not enough space in the garden.');
        this.plants.push({
            plantName, spaceRequired, 'ripe': false, 'quantity': 0,
        });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity) {
        let plantIndex = this.findPlantIndex(plantName);
        if (plantIndex == -1) throw new Error(`There is no ${plantName} in the garden.`);
        if (this.plants[plantIndex]['ripe']) throw new Error(`The ${plantName} is already ripe.`);
        if (quantity <= 0) throw new Error('The quantity cannot be zero or negative.');
        let currentPlant = this.plants[plantIndex];
        currentPlant['ripe'] = true;
        currentPlant['quantity'] += quantity;
        if (quantity == 1) return `${quantity} ${plantName} has successfully ripened.`;
        return `${quantity} ${plantName}s have successfully ripened.`;
    }
    harvestPlant(plantName) {
        let plantIndex = this.findPlantIndex(plantName);
        if (plantIndex == -1) throw new Error(`There is no ${plantName} in the garden.`);
        let currentPlant = this.plants[plantIndex];
        if (!currentPlant['ripe']) throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        this.storage.push({ plantName, 'quantity': currentPlant['quantity'] });
        this.spaceAvailable += currentPlant.spaceRequired;
        this.plants.splice(plantIndex, 1);
        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport() {
        let output = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: `;
        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        sortedPlants.forEach(x => output += `${x.plantName}, `);
        output = output.substring(0, output.length - 2);
        if (this.storage.length == 0) output += `\nPlants in storage: The storage is empty.`;
        output += `\nPlants in storage: `;
        this.storage.forEach(x => output += `${x.plantName} (${x['quantity']}), `);
        output = output.substring(0, output.length - 2);
        return output;
    }
    findPlantIndex(plantName) {
        let plantIndex = -1;
        this.plants.slice().filter((a, i) => { a.plantName == plantName ? plantIndex = i : false });
        return plantIndex;
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));
// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // Uncaught Error Error: Not enough space in the garden.

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));
// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // The cucumber has been successfully planted in the garden.
// // 10 apples have successfully ripened.
// // 1 orange has successfully ripened.
// // Uncaught Error Error: The orange is already ripe.

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));
// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // The cucumber has been successfully planted in the garden.
// // 10 apples have successfully ripened.
// // 1 orange has successfully ripened.
// // Uncaught Error Error: There is no olive in the garden.

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));
// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // The cucumber has been successfully planted in the garden.
// // 10 apples have successfully ripened.
// // 1 orange has successfully ripened.
// // Uncaught Error Error: The quantity cannot be zero or negative.

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));
// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // The raspberry has been successfully planted in the garden.
// // 10 apples have successfully ripened.
// // 1 orange has successfully ripened.
// // The apple has been successfully harvested.
// // Uncaught Error Error: There is no olive in the garden.

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));
// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // The raspberry has been successfully planted in the garden.
// // 10 apples have successfully ripened.
// // 1 orange has successfully ripened.
// // The apple has been successfully harvested.
// // Uncaught Error Error: The raspberry cannot be harvested before it is ripe.

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)
