/*** 
 * Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "". 
 * 
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  return strs.reduce((acc, curr) => {
    while (curr.slice(0, acc.length) !== acc) {
      acc = acc.slice(0, acc.length - 1);
    }
    return acc;
  });
};



console.log(longestCommonPrefix(["flower","flow","flight"]));