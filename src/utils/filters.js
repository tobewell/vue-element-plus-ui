import Vue from 'vue'
import commonUtil from '@/utils/commonUtil'
/**
 * 字符串的第一个字母大写
 */
Vue.filter('capitalize', function(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

/**
 * 将字符串全部转为大写字母
 */
Vue.filter('uppercase', function(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
});

/**
 * 将字符串全部转为小写字母
 */
Vue.filter('uppercase', function(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
});

/**
 * 12345 => $12,345.00
 *
 * @param {String} sign
 * @param {Number} decimals Decimal places
 */

Vue.filter('currency', function(value, _currency, decimals) {
    return commonUtil.currency(value, _currency, decimals);
});

/**
 * 将时间以日期yyyy-MM-dd格式显示
 */
Vue.filter('datestr', function(value) {
    return value ? (typeof value === 'string' ? value.substr(0, 10) : '') : '';
});

/**
 * 'item' => 'items'
 *
 * @params
 *  an array of strings corresponding to
 *  the single, double, triple ... forms of the word to
 *  be pluralized. When the number to be pluralized
 *  exceeds the length of the args, it will use the last
 *  entry in the array.
 *
 *  e.g. ['single', 'double', 'triple', 'multiple']
 */

// Vue.filter('pluralize', function(value) {
//     var args = toArray(arguments, 1);
//     return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
// });


// /**
//  * Limit filter for arrays
//  *
//  * @param {Number} n
//  * @param {Number} offset (Decimal expected)
//  */

// function limitBy(arr, n, offset) {
//     offset = offset ? parseInt(offset, 10) : 0;
//     n = toNumber(n);
//     return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
// }

// /**
//  * Filter filter for arrays
//  *
//  * @param {String} search
//  * @param {String} [delimiter]
//  * @param {String} ...dataKeys
//  */

// function filterBy(arr, search, delimiter) {
//     arr = convertArray(arr);
//     if (search == null) {
//         return arr;
//     }
//     if (typeof search === 'function') {
//         return arr.filter(search);
//     }
//     // cast to lowercase string
//     search = ('' + search).toLowerCase();
//     // allow optional `in` delimiter
//     // because why not
//     var n = delimiter === 'in' ? 3 : 2;
//     // extract and flatten keys
//     var keys = Array.prototype.concat.apply([], toArray(arguments, n));
//     var res = [];
//     var item, key, val, j;
//     for (var i = 0, l = arr.length; i < l; i++) {
//         item = arr[i];
//         val = item && item.$value || item;
//         j = keys.length;
//         if (j) {
//             while (j--) {
//                 key = keys[j];
//                 if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
//                     res.push(item);
//                     break;
//                 }
//             }
//         } else if (contains(item, search)) {
//             res.push(item);
//         }
//     }
//     return res;
// };

// /**
//  * 排序
//  */
// function orderBy(arr) {
//     var comparator = null;
//     var sortKeys = undefined;
//     arr = convertArray(arr);

//     // determine order (last argument)
//     var args = toArray(arguments, 1);
//     var order = args[args.length - 1];
//     if (typeof order === 'number') {
//         order = order < 0 ? -1 : 1;
//         args = args.length > 1 ? args.slice(0, -1) : args;
//     } else {
//         order = 1;
//     }

//     // determine sortKeys & comparator
//     var firstArg = args[0];
//     if (!firstArg) {
//         return arr;
//     } else if (typeof firstArg === 'function') {
//         // custom comparator
//         comparator = function(a, b) {
//             return firstArg(a, b) * order;
//         };
//     } else {
//         // string keys. flatten first
//         sortKeys = Array.prototype.concat.apply([], args);
//         comparator = function(a, b, i) {
//             i = i || 0;
//             return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
//         };
//     }

//     function baseCompare(a, b, sortKeyIndex) {
//         var sortKey = sortKeys[sortKeyIndex];
//         if (sortKey) {
//             if (sortKey !== '$key') {
//                 if (isObject(a) && '$value' in a) a = a.$value;
//                 if (isObject(b) && '$value' in b) b = b.$value;
//             }
//             a = isObject(a) ? getPath(a, sortKey) : a;
//             b = isObject(b) ? getPath(b, sortKey) : b;
//         }
//         return a === b ? 0 : a > b ? order : -order;
//     }

//     // sort on a copy to avoid mutating original array
//     return arr.slice().sort(comparator);
// };


// /**
//  * Convert an Array-like object to a real Array.
//  */
// function toArray(list, start) {
//     start = start || 0;
//     var i = list.length - start;
//     var ret = new Array(i);
//     while (i--) {
//         ret[i] = list[i + start];
//     }
//     return ret
// }

// function convertArray(value) {
//     if (Array.isArray(value)) {
//         return value;
//     } else if (isPlainObject(value)) {
//         // convert plain object to array.
//         var keys = Object.keys(value);
//         var i = keys.length;
//         var res = new Array(i);
//         var key;
//         while (i--) {
//             key = keys[i];
//             res[i] = {
//                 $key: key,
//                 $value: value[key]
//             };
//         }
//         return res;
//     } else {
//         if (typeof value === 'number' && !isNaN(value)) {
//             value = range(value);
//         }
//         return value || [];
//     }
// }

// /**
//  * String contain helper
//  *
//  * @param {*} val
//  * @param {String} search
//  */

// function contains(val, search) {
//     var i;
//     if (isPlainObject(val)) {
//         var keys = Object.keys(val);
//         i = keys.length;
//         while (i--) {
//             if (contains(val[keys[i]], search)) {
//                 return true;
//             }
//         }
//     } else if (Array.isArray(val)) {
//         i = val.length;
//         while (i--) {
//             if (contains(val[i], search)) {
//                 return true;
//             }
//         }
//     } else if (val != null) {
//         return val.toString().toLowerCase().indexOf(search) > -1;
//     }
// }



// /**
//  * Quick object check - this is primarily used to tell
//  * Objects from primitive values when we know the value
//  * is a JSON-compliant type.
//  */
// function isObject(obj) {
//     return obj !== null && typeof obj === 'object'
// }

// function isPlainObject(obj) {
//     return Object.prototype.toString.call(obj) === '[object Object]';
// }

// /**
//  * Check and convert possible numeric strings to numbers
//  * before setting back to data
//  *
//  * @param {*} value
//  * @return {*|Number}
//  */

// function toNumber(value) {
//     if (typeof value !== 'string') {
//         return value;
//     } else {
//         var parsed = Number(value);
//         return isNaN(parsed) ? value : parsed;
//     }
// }

// function getPath(obj, path) {
//     return parseExpression(path).get(obj);
// }

// /**
//  * Parse an expression into re-written getter/setters.
//  *
//  * @param {String} exp
//  * @param {Boolean} needSet
//  * @return {Function}
//  */

// var expressionCache = new Cache(1000);
// var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
// var booleanLiteralRE = /^(?:true|false)$/;

// function parseExpression(exp, needSet) {
//     exp = exp.trim();
//     // try cache
//     var hit = expressionCache.get(exp);
//     if (hit) {
//         if (needSet && !hit.set) {
//             hit.set = compileSetter(hit.exp);
//         }
//         return hit;
//     }
//     var res = { exp: exp };
//     res.get = isSimplePath(exp) && exp.indexOf('[') < 0
//         // optimized super simple getter
//         ?
//         makeGetterFn('scope.' + exp)
//         // dynamic getter
//         :
//         compileGetter(exp);
//     if (needSet) {
//         res.set = compileSetter(exp);
//     }
//     expressionCache.put(exp, res);
//     return res;
// }

// function Cache(limit) {
//     this.size = 0;
//     this.limit = limit;
//     this.head = this.tail = undefined;
//     this._keymap = Object.create(null);
// }

// var p = Cache.prototype;

// /**
//  * Put <value> into the cache associated with <key>.
//  * Returns the entry which was removed to make room for
//  * the new entry. Otherwise undefined is returned.
//  * (i.e. if there was enough room already).
//  *
//  * @param {String} key
//  * @param {*} value
//  * @return {Entry|undefined}
//  */

// p.put = function(key, value) {
//     var removed;
//     if (this.size === this.limit) {
//         removed = this.shift();
//     }

//     var entry = this.get(key, true);
//     if (!entry) {
//         entry = {
//             key: key
//         };
//         this._keymap[key] = entry;
//         if (this.tail) {
//             this.tail.newer = entry;
//             entry.older = this.tail;
//         } else {
//             this.head = entry;
//         }
//         this.tail = entry;
//         this.size++;
//     }
//     entry.value = value;

//     return removed;
// };

// /**
//  * Purge the least recently used (oldest) entry from the
//  * cache. Returns the removed entry or undefined if the
//  * cache was empty.
//  */

// p.shift = function() {
//     var entry = this.head;
//     if (entry) {
//         this.head = this.head.newer;
//         this.head.older = undefined;
//         entry.newer = entry.older = undefined;
//         this._keymap[entry.key] = undefined;
//         this.size--;
//     }
//     return entry;
// };

// /**
//  * Get and register recent use of <key>. Returns the value
//  * associated with <key> or undefined if not in cache.
//  *
//  * @param {String} key
//  * @param {Boolean} returnEntry
//  * @return {Entry|*}
//  */

// p.get = function(key, returnEntry) {
//     var entry = this._keymap[key];
//     if (entry === undefined) return;
//     if (entry === this.tail) {
//         return returnEntry ? entry : entry.value;
//     }
//     // HEAD--------------TAIL
//     //   <.older   .newer>
//     //  <--- add direction --
//     //   A  B  C  <D>  E
//     if (entry.newer) {
//         if (entry === this.head) {
//             this.head = entry.newer;
//         }
//         entry.newer.older = entry.older; // C <-- E.
//     }
//     if (entry.older) {
//         entry.older.newer = entry.newer; // C. --> E
//     }
//     entry.newer = undefined; // D --x
//     entry.older = this.tail; // D. --> E
//     if (this.tail) {
//         this.tail.newer = entry; // E. <-- D
//     }
//     this.tail = entry;
//     return returnEntry ? entry : entry.value;
// };

// function isSimplePath(exp) {
//     return pathTestRE.test(exp) &&
//         // don't treat true/false as paths
//         !booleanLiteralRE.test(exp) &&
//         // Math constants e.g. Math.PI, Math.E etc.
//         exp.slice(0, 5) !== 'Math.';
// }

// function makeGetterFn(body) {
//     try {
//         /* eslint-disable no-new-func */
//         return new Function('scope', 'return ' + body + ';');
//         /* eslint-enable no-new-func */
//     } catch (e) {
//         'development' !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
//     }
// }