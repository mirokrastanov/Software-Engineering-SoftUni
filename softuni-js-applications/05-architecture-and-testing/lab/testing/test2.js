const { chromium } = require('playwright-chromium');
const { expect, assert } = require('chai');

let browser, page; // declare reusable variables

describe('E2E tests', async function () {
    this.timeout(10000); // if it takes longer - increase the timeout

    before(async () => { browser = await chromium.launch(); });  // before all tests - launch chromium browser
    after(async () => { await browser.close(); });               // after all tests - close the browser
    beforeEach(async () => { page = await browser.newPage(); }); // before Each test - open a new tab
    afterEach(async () => { await page.close(); });              // after Each test - close the tab

    it('works', async () => {
        await page.goto('https://softuni.bg');
        await page.screenshot({ path: 'test.png' });
        expect(1).to.equal(1);
    });
});

