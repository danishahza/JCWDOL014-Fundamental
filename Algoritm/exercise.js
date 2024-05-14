/*
1. formating phonenumber
    input = "1234567890"
    output = "(425) 555-1212"
*/
function formatPhoneNumber(input) {
    let format = "(***) ***-****"

    for(let i = 0; i < input.length; i++) {
        format = format.replace("*", input.charAt(i))
        console.log(format) //step loop
    }

    return format
}

console.log(formatPhoneNumber("1234567890"))
console.log("----------")
console.log("")

/*
2. pig latin
    input = "Pig latin is cool"
    output = "igPay atinLay siay oolcay"
*/
function myFunc(input) {
    let res = []

    input.split(" ").forEach(item => {
        res.push(item.slice(1) + item.charAt(0) + "ay")
    })

    return res.join(" ")

}
console.log(myFunc("Pig latin is cool"))
