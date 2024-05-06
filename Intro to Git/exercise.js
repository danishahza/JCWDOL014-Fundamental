// ● Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10
const number = 9;
for (let i = 1; i <= 10; i++) {
    console.log( number + " X " + i);
}

console.log( "----------" );

// ● Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome
let word = "madam"
let reverseWord = ""

for (i = word.length - 1; i >= 0; i-- ) {
    reverseWord += word.charAt(i);

}
if (word == reverseWord) {
    console.log(`${word} is palidrome`);
} else {
    console.log(`${word} is not palidrome`);
}

console.log( "----------" );

// ● Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”
let centimeter = 100000;
let kilometer = 0;

kilometer = centimeter/100000;
console.log( kilometer + " km ");

console.log( "----------" );

// ● Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”
let currency = 1234567;
let curString = currency.toString();
let result = "";
let counter = 0;

for (let i = curString.length -1; i >= 0; i--) {
    if (counter %3 == 0 && counter > 0) {
        result = "." + result
    }

    result = curString.charAt(i) + result
    counter ++
}
console.log(`Rp. ${result},00`);

console.log( "----------" );

// ● Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
let kata = "Hello World";
let searchWord = "ell"
let hasil = kata.replace(searchWord, "")

console.log(hasil);
console.log( "----------" );

// ● Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
let letter = "hello purwadhika jakarta"
let capitalize = ""

for (let i = 0; i < letter.length; i++) {
    if (i == 0 || letter.charAt (i - 1) == " ") {
        capitalize += letter.charAt(i).toUpperCase()
    } else {
        capitalize += letter.charAt(i).toLowerCase()
    }
}

console.log(capitalize)

console.log( "----------" );

// ● Write a code to reverse a string.
// ○ Example : “hello” → “olleh”
// Exercise


console.log( "----------" );

// ● Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’


console.log( "----------" );

// ● Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42


console.log( "----------" );

// ● Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42


console.log( "----------" );

// ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1


console.log( "----------" );

// ● Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`