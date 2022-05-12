class AnalyticsOverview {
    constructor(page)
    {
        this.page = page;
        this.tvl = page.locator('text="Total Value Locked"');
        this.totalTVL = page.locator('h3:below(:text("Total Value Locked"))').first();
        this.detailByProduct = page.locator('text="Detail by Product"');
        this.liquidCrowdloan = page.locator('text="1. Liquid Crowdloan"');
        this.activeTab = page.locator('a[class="active undefined"]');
        this.yeildAccount = page.locator('text="2. Yield Account"');
        this.liquidStaking = page.locator('text="5. Liquid Staking"');
        this.amm = page.locator('text="4. AMM"');
        this.moneyMarket = page.locator('text="3. Money Market"');
        this.farming = page.locator('text="6. Farming"');

    }
   async goTo()
   {
       await this.page.goto("/overview");
   }
   async getPara()
   {
       return await this.para;
   } 
   async getTotalTVL()
    {
        return await this.totalTVL.textContent();
    }
   async getdetailByProduct()
   {
       return await this.detailByProduct;
   }
    
   async clickLiquidCrowdlon()
   {
       await this.liquidCrowdloan.click();
   }
   async clickLiquidStaking()
   {
       await this.liquidStaking.click();
   }
   async clickAMM()
   {
       await this.amm.click();
   }

   async clickMoneyMarket()
   {
       await this.moneyMarket.click();
   }
   async getTextActiveTab()
   {
       
       return await this.activeTab.textContent();
   }
}

module.exports = {AnalyticsOverview};