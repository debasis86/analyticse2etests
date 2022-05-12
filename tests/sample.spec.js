const {test,expect} = require('@playwright/test');

test('Analytics Over view page', async({page})=>
{

    await page.goto("https://analytics.parallel.fi/overview");
    console.log(await page.title());
    await expect(page).toHaveTitle("Parallel Finance Analytics");
    console.log(await page.locator('h3:below(:text("Total Value Locked"))').first().textContent());
});