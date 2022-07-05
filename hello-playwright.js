const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({
    recordVideo: {
      dir: "videos",
    },
  });

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto("https://www.wikipedia.org/");

  // Click strong:has-text("English")
  await page.locator('strong:has-text("English")').click();
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Main_Page');

  // Click div[role="main"] >> text=China Eastern Airlines Flight 5735
  await page
    .locator('div[role="main"] >> text=China Eastern Airlines Flight 5735')
    .click();
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/China_Eastern_Airlines_Flight_5735');

  // Click #toc >> text=Flight
  await page.locator("#toc >> text=Flight").click();
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/China_Eastern_Airlines_Flight_5735#Flight');\\
  await page.screenshot({ path: "wiki_screen.png" });

  // ---------------------
  await context.close();
  await browser.close();
})();
