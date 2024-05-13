// ● Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

let res = []
function factorial(n) {
    res.push(n)
    return n == 0 ? 1 : n * factorial(n - 1)
}
let hasil = factorial(5)

res.pop()
console.log(`${res.join(" x ")} = ${hasil}`);