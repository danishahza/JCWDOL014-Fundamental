function profit(arr) {
    let min = Math.min(...arr)
    let idxMin = arr.indexOf(min)
    let newArr = arr.splice(idxMin, arr.length - idxMin)
    let max = Math.max(...newArr)

    console.log({
        min, newArr, max
    })

    return max - min
}

console.log(profit([1, 5, 3, 6, 4]))
console.log(profit([7, 6, 4, 3, 1]))