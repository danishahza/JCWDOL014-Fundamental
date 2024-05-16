/*
You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
steps. In how many distinct ways can you climb to the top?
● Example 1:
○ Input: n = 2
○ Output: 2
○ Explanation: There are two ways to climb to the top.
■ 1. 1 step + 1 step
■ 2. 2 steps
● Example 2:
○ Input: n = 3
○ Output: 3
○ Explanation: There are three ways to climb to the top.
■ 1. 1 step + 1 step + 1 step
■ 2. 1 step + 2 steps
■ 3. 2 steps + 1 step
*/
function myFunc(n) {
    let fib = [0, 1] // [0, 1, 1, 2]

    for (let i = 0; i < n; i++) { // 0
        fib.push(fib[i] + fib[i + 1])
    }
    return fib[fib.length - 1]
}
console.log(myFunc(5))