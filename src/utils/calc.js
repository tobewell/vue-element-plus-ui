/**
 * Created by Administrator on 2016/9/1 0001.
 */
/**
 * 不丢精加法
 */

Number.prototype.add = function(num){
    var baseNum, baseNum1, baseNum2;
    try {
        baseNum1 = this.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return Math.round(this * baseNum + num * baseNum) / baseNum;
};
/**
 * 不丢精减法
 */
Number.prototype.sub = function(num){
    var baseNum, baseNum1, baseNum2;
    var precision;// 精度
    try {
        baseNum1 = this.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
    return parseFloat(((this * baseNum - num * baseNum) / baseNum).toFixed(precision));
};
/**
 * 不丢精乘法
 */
Number.prototype.mul = function(num){
    var baseNum = 0;
    try {
        baseNum += this.toString().split(".")[1].length;
    } catch (e) {
    }
    try {
        baseNum += num.toString().split(".")[1].length;
    } catch (e) {
    }
    return Number(this.toString().replace(".", "")) * Number(num.toString().replace(".", "")) / Math.pow(10, baseNum);
};
/**
 * 不丢精除法，precision为精度，如果不填默认为整数
 */
Number.prototype.div = function(num,precision){
    precision = precision||0;
    var baseNum1 = 0, baseNum2 = 0;
    var baseNum3, baseNum4;
    try {
        baseNum1 = this.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    
    var  baseNum3 = Number(this.toString().replace(".", ""));
    var baseNum4 = Number(num.toString().replace(".", ""));
    return parseFloat(((baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1)).toFixed(precision));
};