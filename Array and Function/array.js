let arr = ['A', 'B', 'C', 'D', 'E', 'F']

// console.log(arr[4])

let score = [10, 20, 30, 40, 50]

let kotak = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// console.log(arr.toString()) //Ubah array ke string
// console.log(arr.join(""))

console.log(arr)
let deleteValue = arr.pop() //menghapus dari belakang
console.log(deleteValue)
console.log(arr)
arr.push("G") //menambah dari belakang
console.log(arr)
arr.shift() //menghapus dari depan
console.log(arr)
arr.unshift("Z") //menambahkan dari depan
console.log(arr)

console.log(arr.length)

console.log(arr.indexOf("G"))

//score.sort((a, b) => a -b) // asc
score.sort((a, b) => b -a) // desc
console.log(score)

arr.reverse()
console.log(arr)