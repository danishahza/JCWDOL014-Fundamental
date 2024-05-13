// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// // separated by commas and - the last word - by an 'and'.
// // a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
function concate(arr) {
    let lastWord = arr.pop()
    return arr.join(",") + `, and ${lastWord}`
}

console.log(concate(['apple', 'banana', 'cherry', 'date']))