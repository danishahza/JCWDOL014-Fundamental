// ● Create a function to check if two objects are equal
// ● Example
// ○ Input : { a: 2 } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: “Hello” } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: 1 } & { a: 1 }
// ○ Output: true
let obj1 = {a : 1}
let obj2 = {a : 1}

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]

console.log(obj1 === obj2)

console.log(typeof arr1)

console.log(JSON.stringify(obj1))
console.log(JSON.stringify(arr1))

console.log(JSON.parse("[1, 2, 3]"))//unruk membuat string to object

function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)

}
console.log(isEqual(obj1, obj2))
console.log(isEqual(arr1, arr2))
