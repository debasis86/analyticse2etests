const {expect} = require('@playwright/test');

class APIUtils
{
    constructor(apiContext)
    {
        this.apiContext = apiContext;
    }
    async getTotalTVlValue()
    {
    const tvlResponse = await this.apiContext.get("https://analytics.parallel.fi/api/tvl");
    expect(tvlResponse.ok()).toBeTruthy();
    const tvlResponseJson = await tvlResponse.json();
    const totalTVL = tvlResponseJson.total;
    console.log(totalTVL);
    return totalTVL;
    }
}
module.exports = {APIUtils};