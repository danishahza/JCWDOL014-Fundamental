/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.
● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
● Example 1:
○ Input: s = "anagram", t = "nagaram"
○ Output: true
● Example 2:
○ Input: s = "rat", t = "car"
○ Output: false
*/ 
function myFunc(str1, str2) {
    const kata1= str1.toLowerCase().split("").sort().join("")
    const kata2= str2.toLowerCase().split("").sort().join("")

    return kata1 == kata2
}

console.log(myFunc("Anagram", "Nagaram"))
console.log(myFunc("rat", "car"))