// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';

export async function scrapeStandings(url) {
    // exports.scrapeStandings = async function (url) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url);

    async function scrapeHeaders(selector) {
        const headersRowEl1 = await page.waitForSelector(selector);
        const headersThArray1 = await headersRowEl1.$$('th');
        const headersArray1 = [];
        for (let i = 0; i < headersThArray1.length; i++) {
            const element = headersThArray1[i];
            const thText = await page.evaluate(element => element.textContent, element);
            headersArray1.push(thText);
        }
        return headersArray1;
    }
    async function scrapeBody(selector, headersArray1) {
        const bodyEl1 = await page.waitForSelector(selector);
        const bodyTdArray1 = await bodyEl1.$$('td');
        const bodyArray1 = { temp: {}, result: [] };
        for (let i = 0; i < bodyTdArray1.length; i++) {
            const element = bodyTdArray1[i];
            const thText = await page.evaluate(element => element.textContent, element);
            const img = await element.$$('img');
            let imgSrc;
            if (img.length != 0) {
                let imgEl = img[0];
                imgSrc = await page.evaluate(imgEl => imgEl.getAttribute('src'), imgEl);
                // console.log(imgSrc);
            }
            if (imgSrc) {
                bodyArray1.temp[headersArray1[i % 12]] = [thText, imgSrc];
            } else {
                bodyArray1.temp[headersArray1[i % 12]] = [thText];
            }
            if (Object.keys(bodyArray1.temp).length == 12) {
                let copy = JSON.parse(JSON.stringify(bodyArray1.temp));
                bodyArray1.result.push(copy);
                bodyArray1.temp = {};
            }
        }
        return bodyArray1.result;
    }
    // if selector wail - copy it directly from the inspector tool in chrome
    const headersArray = await scrapeHeaders('.Crom_headers__mzI_m');
    const bodyArray1 = await scrapeBody('.Crom_body__UYOcU', headersArray);
    const bodyArray2 = await scrapeBody('#__next > div.Layout_base__6IeUC.Layout_justNav__2H4H0 > div.Layout_mainContent__jXliI > div.MaxWidthContainer_mwc__ID5AG > section.Block_block__62M07.nba-stats-content-block > div > div:nth-child(3) > div.Crom_container__C45Ti.crom-container > table > tbody', headersArray);

    browser.close();

    return {
        eastConference: bodyArray1,
        westConference: bodyArray2,
        updatedAt: ['MM/DD/YYYY, HH:MM:SS', (new Date()).toLocaleString()],
    };
}

export async function scrapePlayers(url) {
    const selector = '#__next > div.Layout_base__6IeUC.Layout_withSubNav__ByKRF.Layout_justNav__2H4H0 > div.Layout_mainContent__jXliI > main > div.MaxWidthContainer_mwc__ID5AG > section > div > div.PlayerList_content__kwT7z > div.PlayerList_filters__n_6IL > div.PlayerList_pagination__c5ijE > div > div.Pagination_pageDropdown__KgjBU > div > label > div > select';
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url);
    await page.click('#onetrust-close-btn-container > button');
    await page.waitForSelector(selector);
    await page.click(selector);
    await page.select(selector, '-1');
    const table = await page.waitForSelector('#__next > div.Layout_base__6IeUC.Layout_withSubNav__ByKRF.Layout_justNav__2H4H0 > div.Layout_mainContent__jXliI > main > div.MaxWidthContainer_mwc__ID5AG > section > div > div.PlayerList_content__kwT7z > div.PlayerList_playerTable__Jno0k > div > div > div > table');
    const tds = await table.$$('tr');
    // console.log(tds);
    await page.click('#__next > div.Layout_base__6IeUC.Layout_withSubNav__ByKRF.Layout_justNav__2H4H0 > div.Layout_mainContent__jXliI > main > div.MaxWidthContainer_mwc__ID5AG > section > div > div.Block_titleContainerBetween__0GYet > h1');
    await page.waitForNavigation();    
    await page.waitForSelector('#__next > div.Layout_base__6IeUC.Layout_withSubNav__ByKRF.Layout_justNav__2H4H0 > div.Layout_mainContent__jXliI > main > div.MaxWidthContainer_mwc__ID5AG > section > div > div.PlayerList_content__kwT7z > div.PlayerList_playerTable__Jno0k > div > div > div > table > tbody > tr:nth-child(565) > td:nth-child(8)');
    await page.waitForNavigation();    

    // const data = await page.evaluate(() => {
    //     return tds.map(td => td.innerText);
    // });
    // console.log(data);

    for (let x = 0; x < tds.length; x++) {
        // if (x % 3 == 0) await page.waitForNavigation();
        const el = tds[x];
        const tdText = await page.evaluate(el => el.textContent, el);
        console.log(tdText);
    }

    // const playersTable = await page.waitForSelector('table.players-list tbody');
    // const tableCells = await playersTable.$$('td');
    // let test = [];
    // for (let i = 0; i < tableCells.length; i++) {
    //     const element = tableCells[i];
    //     const textC = await page.evaluate(element => element.textContent, element);
    //     test.push(textC);

    // }
    // console.log(test);

    browser.close();
    return;
}
scrapePlayers('https://www.nba.com/players');