const {test,expect,request} = require('@playwright/test');
const {AnalyticsOverview} = require('../pageobjects/AnalyticsOverview');
const {APIUtils} = require('../utility/APIUtils');
const { CommonUtils } = require('../utility/CommonUtils');

test.beforeAll( async()=>
{
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext);
    this.totalTVL = await apiUtils.getTotalTVlValue();
});

test('Analytics Over view page', async({page})=>
{
    const overview = new AnalyticsOverview(page);
    await overview.goTo();
    await expect(page).toHaveTitle("Parallel Finance Analytics");
    expect(await page.locator('img[alt$="Parallel Logo"]').screenshot()).toMatchSnapshot('parallelLogo.png');
    await expect(overview.detailByProduct).toBeVisible();
    await expect(overview.tvl).toBeVisible();
});
test('Analytics Over view page All Products TVL', async({page})=>
{
    const overview = new AnalyticsOverview(page);
    await overview.goTo();
    var tvl = await overview.getTotalTVL();
    const common = new CommonUtils();
    var tvlValue = await common.getTVLValueOrDate(tvl,true);
    var tvlNum = await common.getTVLNumValue(tvlValue);
    expect(this.totalTVL).toBeGreaterThanOrEqual(tvlNum);
}); 
test('Validate Crowdloan Navigation From Overview',async({page})=>
{
    const overview = new AnalyticsOverview(page);
    await overview.goTo();
    await overview.clickLiquidCrowdlon();
    await page.waitForLoadState('networkidle');
    expect(await overview.getTextActiveTab()).toMatch('Crowdloan');
    expect(await overview.tvl).toBeVisible();
});

test('Validate Liquid Staking Navigation From Overview',async({page})=>
{
    const overview = new AnalyticsOverview(page);
    await overview.goTo();
    await overview.clickLiquidStaking();
    expect(await overview.getTextActiveTab()).toMatch('Staking');
});

test('Validate AMM Navigation From Overview',async({page})=>
{
    const overview = new AnalyticsOverview(page);
    await overview.goTo();
    await overview.clickAMM();
    expect(await overview.getTextActiveTab()).toMatch('AMM');
});

test('Validate Money Market Navigation From Overview',async({page})=>
{
    const overview = new AnalyticsOverview(page);
    await overview.goTo();
    await overview.clickMoneyMarket();
    expect(await overview.getTextActiveTab()).toMatch('Money Market');
});