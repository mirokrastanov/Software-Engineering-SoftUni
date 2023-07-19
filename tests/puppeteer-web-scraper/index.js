const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url);

    const headerRow1 = await page.waitForSelector('.Crom_headers__mzI_m')
    const thArray1 = await headerRow1.$$('th');
    const headersArray1 = [];
    for (let i = 0; i < thArray1.length; i++) {
        const element = thArray1[i];
        const thText = await page.evaluate(element => element.textContent, element);
        headersArray1.push(thText);
    }
    console.log(headersArray1);







    browser.close();
}

scrapeProduct('https://www.nba.com/standings');