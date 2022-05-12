class CommonUtils
{
    async getTVLValueOrDate(tvl,value)
    {
        var tvlInfo =  tvl.split("(");
           var tvlValue = tvlInfo[0].trim();
           var tvlDate =  tvlInfo[1].trim();  
        return value ? tvlValue : tvlDate;
    }
    async getTVLNumValue(value)
    {
        var tt= value.replace(/,/g, '');
        tt= tt.substring(1);
    var tvlNum = parseInt(tt);
    console.log(tvlNum);
    return tvlNum;
    }
}

module.exports = {CommonUtils};