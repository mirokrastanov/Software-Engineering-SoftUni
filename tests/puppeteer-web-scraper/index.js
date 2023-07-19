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
    const bodyArray1 = { temp: {}, result: [] };
    for (let i = 0; i < bodyTdArray1.length; i++) {
        const element = bodyTdArray1[i];
        const thText = await page.evaluate(element => element.textContent, element);
        bodyArray1.temp[headersArray1[i % 12]] = thText;

        if (Object.keys(bodyArray1.temp).length == 12) {
            let copy = JSON.parse(JSON.stringify(bodyArray1.temp));
            bodyArray1.result.push(copy);
            bodyArray1.temp = {};
        }       
    }
    console.table(new Array(2).fill({ x: 1, y: 2, z: 3 }));
    console.table(bodyArray1.result, headersArray1);
    console.log(bodyArray1.result);





    browser.close();
}

scrapeProduct('https://www.nba.com/standings');