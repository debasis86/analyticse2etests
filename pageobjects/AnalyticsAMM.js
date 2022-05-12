class AnalyticsAMM
{
    constructor(page)
    {
        this.page = page;
        this.tvl = page.locator('text="Total Value Locked"');
        this.totalTVL = page.locator('h3:below(:text("Total Value Locked"))').first();
        this.volume = page.locator('text="Volume"');
        this.allPools = page.locator('text="All Pools"');
        this.tokens = page.locator('text="Tokens"');
        this.transactions = page.locator('text="Transactions"');
        this.sDotDotPool = page.locator('text="sDOT/DOT"');
        this.sDotToken = page.locator('text="sDOT"');
        this.addLiquidity = page.locator('text="Add Liquidity"');
        this.addDotInParaTransaction = page.locator('a[href*="https://parallel.subscan.io/extrinsic/"]');
    }
    async goTo()
    {
        await this.page.goto("/amm");
    }
    async getTotalTVL(value)
    {
       var tvlInfo =  (await this.totalTVL.textContent()).split("(");
       var tvlValue = tvlInfo[0].trim();
       var tvlDate =  tvlInfo[1].trim();  
       return value ? tvlValue : tvlDate;
    }
    async clicksDotDotPool()
    {
        await this.sDotDotPool.click();
    }

    async clicksDotToken()
    {
        await this.sDotToken.click();
    }
    async clickTransaction()
    {
     await this.addDotInParaTransaction.first().click();
    }

}
module.exports = {AnalyticsAMM};