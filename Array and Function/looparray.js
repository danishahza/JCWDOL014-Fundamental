const fruits = ["Apple", "Orange", "Plum"]

// for (let fruit of fruits) {
//     console.log(fruit)
// }

// for (let i = 0; i < fruits.length; i++ ) {
//     console.log(fruits[i])
// }

// fruits.forEach((fruit) => {
//     console.log(fruit)
// })

const age = [20, 21, 22, 23, 24]

// const result = []

// age.forEach((item) => {
//     result.push(item + 5)
// })
// console.log(result)

const hasil = age.map((item) => item + 5)
console.log(hasil)