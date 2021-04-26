const puppeteer = require('puppeteer');

async function example() {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1366, height: 768 });

    await page.goto('http://localhost:8000');

    await page.screenshot({
        path: 'example.png'
    });

    await browser.close();
}

example();