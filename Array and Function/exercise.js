// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height
function triangle(height) {
    let count = 0

    for(let i = 1; i <= height; i++ ) {
        let res = "" //baris
        for(let j = 1; j <=i; j++) {
            count++
            res += count < 10 ? `0${count} ` : `${count} `
        }
        console.log(res)
    }

    return count
}
triangle(10)
console.log()

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz 
function fizzBuzz (n) {
    let number = []

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            number.push("FizzBuzz")
        } else if (i % 5 === 0) {
            number.push("Buzz")
        } else if (i % 3 === 0 ) {
            number.push("Fizz")
        } else {
            number.push(i)
        }
    }
    return number.join(", ")
}
fizzBuzz(15)
console.log()

// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”
function bmi (weight, height) {
    let total = weight / (height**2) 
    let category = ""
    console.log(total)

    if (total < 18.5 ) {
        category = "Less Weight"
    } else if (total >= 18.5 && total <=24.9 ) {
        category = "Ideal"
    } else if (total >= 25.0 && total <= 29.9) {
        category = "Overweight"
    } else if (total >= 30.0 && total <= 39.9) {
        category = "Very Overweight"
    } else if (total > 39.9) {
        category = "Obesity"
    } else {
        category = "Invalid"
    }

    return category
}
console.log(bmi(70, 1.7))
console.log()

// ● Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
function even (arr) {
    return arr.filter((item) => item % 2 === 0)
}
   
console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log()

// ● Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]
function splitWord(str) {
    return str.split(' ')  
}

console.log(splitWord('Hello World'))





