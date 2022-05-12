const {test,expect} = require('@playwright/test');
const {ParallelCrowdloan} = require('../pageobjects/ParallelCrowdloan');

test('Parallel Crowdloan Page', async({page})=>
{
    const crowdloan = new ParallelCrowdloan(page);
    await crowdloan.goTo();
    await expect(crowdloan.tvl).toBeVisible();
    await expect(crowdloan.marketShare).toBeVisible();
    await expect(crowdloan.crowdLoanByProject).toBeVisible();
    await expect(crowdloan.parallelDailyContribution).toBeVisible();
    await expect(crowdloan.marketDominance).toBeVisible();
    await expect(crowdloan.dotAuctions).toBeVisible();
    await expect(crowdloan.crowdLoanDailyContributions).toBeVisible();
    await expect(crowdloan.crowdLoanDotTVL).toBeVisible();
});

test('Crowdloan page TVL', async({page})=>
{
    const crowdloan = new ParallelCrowdloan(page);
    await crowdloan.goTo();
    var tvl = await crowdloan.getTotalTVL(true);
    var tt= tvl.replace(/,/g, '');
    tt= tt.substring(1);
    var tvlNum = parseInt(tt);
    console.log(tvlNum);
    expect(tvlNum).toBeGreaterThanOrEqual(400000000);
});