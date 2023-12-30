/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const mapping = new Map();
  mapping.set("I", "1");
  mapping.set("V", "5");
  mapping.set("X", "10");
  mapping.set("L", "50");
  mapping.set("C", "100");
  mapping.set("D", "500");
  mapping.set("M", "1000");
  
  return s
    .replace('IV', 'IIII')
    .replace('IX', 'VIIII')
    .replace('XL', 'XXXX')
    .replace('XC', 'LXXXX')
    .replace('CD', 'CCCC')
    .replace('CM', 'DCCCC')
    .split('')
    .map(a => Number(mapping.get(a)))
    .reduce((a, b) => a + b);
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
