/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';
  let i = 0;
  while(i < strs[0].length) {
    const match = strs[0].split('')[i];
    let counter = 0;
    for (let index = 0; index < strs.length; index++) {
      const char = strs[index].split('')[i];
      if(char === match) {
        counter++;
      }
    }
    if (counter === strs.length){
      prefix = prefix + match;
    }
    if (prefix === '' || counter != strs.length){
      break;
    }
    i++;
  };
  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix([""])); // ""

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix2 = function(strs) {
  if (strs.length === 0 || strs[0] === '') {
    return '';
  }
  let match = strs[0].split('')[0];
  let counter = 0;
  for (let i = 0; i < strs.length; i++) {
    if (match === strs[i].split('')[0]) {
      counter++;
    }
  }

  if (counter === strs.length) {
    const newStrs = strs.map(a => a.split('').slice(1).join(''));
    return match + longestCommonPrefix2(newStrs);
  } else {
    return '';
  }
};

console.log("-------------");
console.log(longestCommonPrefix2(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix2(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix2([""])); // ""
