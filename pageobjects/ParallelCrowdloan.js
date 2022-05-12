class ParallelCrowdloan
{
    constructor(page)
    {
        this.page = page;
        this.tvl = page.locator('text="Total Value Locked"');
        this.totalTVL = page.locator('h3:below(:text("Total Value Locked"))').first();
        this.marketShare = page.locator('text="Market Share"');
        this.crowdLoanByProject = page.locator('text="Crowdloan by Projects"');
        this.parallelDailyContribution = page.locator('text="Parallel: Daily Contributions"');
        this.marketDominance = page.locator('text="Market Dominance"');
        this.dotAuctions = page.locator('text="DOT Auctions"');
        this.crowdLoanDailyContributions = page.locator('text="Crowdloan: Daily Contributions "');
        this.crowdLoanDotTVL = page.locator('text="Crowdloan DOT TVL"');
    }
    async goTo()
    {
        await this.page.goto("/crowdloan");
    }
    async getTotalTVL(value)
    {
       var tvlInfo =  (await this.totalTVL.textContent()).split("(");
       var tvlValue = tvlInfo[0].trim();
       var tvlDate =  tvlInfo[1].trim();  
       return value ? tvlValue : tvlDate;
    }

}
module.exports = {ParallelCrowdloan};