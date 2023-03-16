const { chromium } = require('playwright-chromium');
async function test() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://softuni.bg/');
    await page.screenshot({ path: `softuni.png` });
    await browser.close();
}
test();