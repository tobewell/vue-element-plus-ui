
export default  {
    getScrollTop(){
        let scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop; 
    },
    setScrollTop(top){ 
        if (!isNaN(top)) {
            if (document.documentElement && document.documentElement.scrollTop !== undefined) {
                document.documentElement.scrollTop = top;
            } else if (document.body) {
                document.body.scrollTop = top;
            }
        } 
    },
    currency(value, _currency, decimals){//金钱格式化显示
        value = parseFloat(value);
        if (!isFinite(value) || !value && value !== 0) return '';
        _currency = _currency != null ? _currency : '￥';
        decimals = decimals != null ? decimals : 2;
        var stringified = Math.abs(value).toFixed(decimals);
        var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
        var i = _int.length % 3;
        var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
        var _float = decimals ? stringified.slice(-1 - decimals) : '';
        var sign = value < 0 ? '-' : '';
        var digitsRE = /(\d{3})(?=\d)/g;
        return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
    },
    encodeHTML: (function(doNotSkipEncoded) {//HTML编码
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	})(false)
}

