// ● Write a code to convert celsius to fahrenheit
// ○ Example: 60 Celcius → 140 Fahrenheit
let celcius, fahrenheit;
celcius = 1

fahrenheit = (celcius * (9/5)) + 32;

console.log("Convert Result is "+fahrenheit);
console.log("----------");

// ● Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number
let number;
number = 14;

if (number % 2 == 0) {
    console.log("The Number is even ");
} else {
    console.log("The Number is odd ");
}
console.log("----------");

// ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number
let angka = 8;
let pembagi = 0;

for (let i = 1; i <= angka; i++) {
   if (angka % i === 0) {
    pembagi++;
   }
}

if (pembagi === 2) {
    console.log("The Number is prime number ");
} else {
    console.log("The Number is not prime number ");
}
console.log("----------");

// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 7
let nsum = 5
let resultsum = 0

for (let i = 1; i <=nsum; i++) {
    resultsum += i
}
console.log(resultsum);


console.log("----------");

// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720
let nfactor = 6;
let resultfactor = 1;

for (let i = nfactor; i > 0; i--) {
    resultfactor *= i
}
console.log(resultfactor);


console.log("----------");

// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610
let nfib = 15;
let a = 0;
let b = 1;
let nextNumber = 0;

for (let i = 1; i < nfib; i++) {
    nextNumber = a + b;
    a = b;
    b = nextNumber;
    console.log(b);
}
