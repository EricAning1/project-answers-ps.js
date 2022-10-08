////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////n

//1. Write a JavaScript display the larger of two integers

let num1 = 50;
let num2 = 75;
if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}!`);
} else if (num2 > num1) {
  console.log(`${num2} is greater than ${num1} !`);
} else {
  console.log(`The two integers are the same!`);
}

/*2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */

let score = 45;
if (score >= 90) {
  console.log("You got A");
} else if (score >= 80) {
  console.log("You got B");
} else if (score > 70) {
  console.log("You got C");
} else if (score > 55) {
  console.log("You got D");
} else {
  console.log("You got F");
}

//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"

var time = "10:00";
if (time >= "05:00" && time <= "11:59") {
  console.log("Good Morning");
} else if (time >= "12:00" && time <= "16:00") {
  console.log("Good Afternoon");
} else {
  console.log("Hey There");
}

////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in

let name = "Sabrina";
let letter = name.charAt(4);
console.log(letter);

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

//A unicode provides a unique number for a every character. It allows data to be transported across different platforms, devices and applications, without corruption.
let text = "Teddy";
let numm = text.charCodeAt(2);
console.log(numm);

// Using fromCharCode() - make it readable for us :). You'll see!
console.log(String.fromCharCode(100));

// Take your first and last name and concat()
let firstName = "Eric ";
let lastName = "Opoku-Aning";
let fullName = firstName.concat(lastName);
console.log(fullName);

// Create a string and make it return true using startsWith()
let greet = "Hey there! I am here";
let firstWord = greet.startsWith("Hey");
console.log(firstWord);

// Now use any variable with endsWith() and return false
let lastWord = console.log(greet.endsWith("there"));

// Finish the following sentence. Use includes() and return true.

const ozgur =
  "Once upon a time Ozgur looked up at the Moon, and saw the face of  a human.";
console.log(ozgur.includes("human"));

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?

const joshHadALittleLambOopsCow =
  "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone.";

let findCow = joshHadALittleLambOopsCow.indexOf("cow");
console.log(findCow);

////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true.
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke";

console.log(a < b);
console.log(c > b);
console.log(d === d);
console.log(d != a);
console.log(a < 15);
console.log(a < b < c);
console.log(c > b > a != d);

for (let i = 1; i <= 10; i++) {
  console.log(`Ken's room spins ${i} times`);
}

////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

for (let i = 1; i <= 20; i++) {
  console.log(`Teo's room spins ${i} times`);
}

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

let i = 1;
while (i <= 20) {
  console.log(`I'm sorry.`);
  i++;
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :)

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)

const whateverQueenBeySaid = {
  thing1: "shoes",
  thing2: "clothes",
  thing3: "gaming console",
};
for (var whatever in whateverQueenBeySaid) {
  console.log(whateverQueenBeySaid[whatever]);
}

// Using (FOR IN LOOP), print the indexes of the array.

const lana = ["l", "a", "n", "a"];
for (var l in lana) {
  console.log(lana[l]);
}
