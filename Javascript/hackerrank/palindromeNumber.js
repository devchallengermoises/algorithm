/**
 *  Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 *  Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.
 * 
 * 
 * Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * **/



/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = function(x) {
    let rev = x.toString().split('').reverse().join('');

    return parseInt(rev) === x;

};



console.log(isPalindrome(121));