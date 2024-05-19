/*● Create a function to convert roman numeral to integer.
● Example 1:
○ Input: s = "III”
○ Output: 3
○ Explanation: III = 3.
● Example 2:
○ Input: s = "LVIII"
○ Output: 58
○ Explanation: L = 50, V= 5, III = 3.
● Example 3:
○ Input: s = "MCMXCIV"
○ Output: 1994
○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
function romanToIn (str) {
    let res = 0
    let roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

   for(let i = 0; i < str.length; i++) {
    let currNum = roman[str.charAt(i)] //1
    let nextNum = roman[str.charAt(i + 1)] //5

    if (currNum < nextNum) {
        res -= currNum // res -1
    } else {
        res += currNum
    }
   }

   return res
}

console.log(romanToIn("IV"))