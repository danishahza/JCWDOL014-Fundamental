/*Create a function to convert Excel sheet column title to its corresponding column number.
● Example :
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
…
● Example :
○ Input : AB
○ Output : 28
*/ 
function convert (columnTitle){
    let column = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let result = 0

    for (let i = 0; i < columnTitle.length; i++) {
        result = column.findIndex(item => item == columnTitle.charAt(i)) + result * 26
    }
    return result

}   
console.log(convert("ABCD"))
