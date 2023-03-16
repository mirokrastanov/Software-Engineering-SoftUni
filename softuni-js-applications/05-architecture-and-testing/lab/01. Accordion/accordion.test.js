const { chromium } = require('playwright-chromium');
const { expect, assert } = require('chai');

// Declare reusable variables
/** @type {Browser} */
let browser;
/** @type {Page} */
let page;

describe('E2E tests', async function () {
    this.timeout(10000);

    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('titles text', async () => {
        await page.goto('http://localhost:5500/softuni-js-applications/05-architecture-and-testing/lab/01.%20Accordion/index.html');
        let titles = await page.locator('div.head>span').allTextContents();
        expect(titles).to.contains('Scalable Vector Graphics');
        expect(titles).to.contains('Open standard');
        expect(titles).to.contains('Unix');
        expect(titles).to.contains('ALGOL');
    });

    it('shows more text', async () => {
        await page.goto('http://localhost:5500/softuni-js-applications/05-architecture-and-testing/lab/01.%20Accordion/index.html');
        await page.getByText('More').first().click();
        let visible = await page.isVisible('div.extra');
        expect(visible).to.be.true;
        let content = await page.locator('div.extra p').first().allTextContents();
        expect(content.length).to.be.greaterThan(0);
    });

    it('shows less text', async () => {
        await page.goto('http://localhost:5500/softuni-js-applications/05-architecture-and-testing/lab/01.%20Accordion/index.html');
        await page.getByText('More').first().click();
        let visible = await page.isVisible('div.extra');
        expect(visible).to.be.true;
        await page.getByText('Less').first().click();
        visible = await page.isVisible('div.extra');
        expect(visible).to.be.false;
    });
});

