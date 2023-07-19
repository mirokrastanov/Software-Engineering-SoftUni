const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url);

    const headersRowEl1 = await page.waitForSelector('.Crom_headers__mzI_m');
    const headersThArray1 = await headersRowEl1.$$('th');
    const headersArray1 = [];
    for (let i = 0; i < headersThArray1.length; i++) {
        const element = headersThArray1[i];
        const thText = await page.evaluate(element => element.textContent, element);
        headersArray1.push(thText);
    }
    console.log(headersArray1);

    const bodyEl1 = await page.waitForSelector('.Crom_body__UYOcU');
    const bodyTdArray1 = await bodyEl1.$$('td');
    const bodyArray1 = [];
    for (let i = 0; i < bodyTdArray1.length; i++) {
        const element = bodyTdArray1[i];
        const thText = await page.evaluate(element => element.textContent, element);
        bodyArray1.push(thText);
    }
    console.log(bodyArray1);






    browser.close();
}

scrapeProduct('https://www.nba.com/standings');