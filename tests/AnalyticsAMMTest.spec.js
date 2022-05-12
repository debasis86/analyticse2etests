const {test,expect} = require('@playwright/test');
const {AnalyticsAMM} = require('../pageobjects/AnalyticsAMM');

test('Analytics AMM Page Charts', async({page})=>
{
    const amm = new AnalyticsAMM(page);
    await amm.goTo();
    await expect(amm.tvl).toBeVisible();
    await expect(amm.volume).toBeVisible();
    await expect(amm.allPools).toBeVisible();
    await expect(amm.tokens).toBeVisible();
    await expect(amm.transactions).toBeVisible();
});

test('AMM page TVL value', async({page})=>
{
    const amm = new AnalyticsAMM(page);
    await amm.goTo();
    var tvl = await amm.getTotalTVL(true);
    var tt= tvl.replace(/,/g, '');
    tt= tt.substring(1);
    var tvlNum = parseInt(tt);
    console.log(tvlNum);
    expect(tvlNum).toBeGreaterThanOrEqual(5000000);
});

test('AMM page navigate to pool sDOT/DOT', async({page})=>
{
    const amm = new AnalyticsAMM(page);
    await amm.goTo();
    await amm.clicksDotDotPool();
    console.log(await amm.getTotalTVL(true));
    await expect(amm.addLiquidity).toBeVisible();

});

test('AMM page navigate to Token sDOT', async({page})=>
{
    const amm = new AnalyticsAMM(page);
    await amm.goTo();
    await amm.clicksDotToken();
    console.log(await amm.getTotalTVL(true));
    await expect(amm.addLiquidity).toBeVisible();

});

test('AMM page navigate to All Transaction', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const amm = new AnalyticsAMM(page);
    await amm.goTo();
    const count = amm.addDotInParaTransaction.count();
    for(let i=0 ;i<count;i++)
    {
        const [newPage] = await Promise.all(
            [
                context.waitForEvent('page'),
                amm.addDotInParaTransaction.nth(i).click(),
            ]
            );
            await expect(newPage.locator('text="Extrinsic Hash"')).toBeVisible();
    }
});