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
