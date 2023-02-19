class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }
    reserveABottle(wineName, wineType, price) {
        if (this.space == 0) throw new Error('Not enough space in the cellar.');
        this.wines.push({ wineName, wineType, price, 'paid': false });
        this.space--;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
    payWineBottle(wineName, price) {
        let wineIndex = this.findWineIndex(wineName);
        if (wineIndex == -1) throw new Error(`${wineName} is not in the cellar.`);
        let currentWine = this.wines[wineIndex];
        if (currentWine['paid']) throw new Error(`${wineName} has already been paid.`);
        currentWine['paid'] = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }
    openBottle(wineName) {
        let wineIndex = this.findWineIndex(wineName);
        if (wineIndex == -1) throw new Error(`The wine, you're looking for, is not found.`);
        let currentWine = this.wines[wineIndex];
        if (!currentWine['paid']) throw new Error(`${wineName} need to be paid before open the bottle.`);
        this.wines.splice(wineIndex, 1);
        return `You drank a bottle of ${wineName}.`;
    }
    cellarRevision(wineType) {
        let output = '';
        if (!wineType) {
            output += `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n`;
            let sortedWines = this.wines.slice().sort((a, b) => a.wineName.localeCompare(b.wineName));
            sortedWines.forEach(x => output += `${x.wineName} > ${x.wineType} - ${x['paid'] ? 'Has Paid' : 'Not Paid'}.\n`);
        } else {
            let filteredWines = this.wines.slice().filter(x => x.wineType == wineType);
            if (filteredWines.length > 0) {
                filteredWines.forEach(x => output += `${x.wineName} > ${x.wineType} - ${x['paid'] ? 'Has Paid' : 'Not Paid'}.\n`);
            } else throw new Error(`There is no ${wineType} in the cellar.`);
        }
        return output.trim();
    }
    findWineIndex(wineName) {
        let wineIndex = -1;
        this.wines.slice().filter((a, i) => { a.wineName == wineName ? wineIndex = i : false });
        return wineIndex;
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// // You reserved a bottle of Sauvignon Blanc Marlborough White wine.
// // You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.
// // Uncaught Error Error: Not enough space in the cellar.


// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
// // You bought a Sauvignon Blanc Marlborough for a 120$.
// // Uncaught Error Error: Bodegas Godelia Mencía is not in the cellar.


// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));
// // You drank a bottle of Sauvignon Blanc Marlborough.
// // Uncaught Error Error: Cabernet Sauvignon Napa Valley need to be paid before open the bottle.


// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));
// // You reserved a bottle of Bodegas Godelia Mencía Rose wine.
// // Bodegas Godelia Mencía > Rose - Not Paid.


const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
// You have space for 2 bottles more.
// You paid 144$ for the wine.
// Bodegas Godelia Mencía > Rose - Has Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.