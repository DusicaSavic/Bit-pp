// Write a function to check whether the `input` is a string or not.

// -> true
// 12 -> false

// function checkString(string) {
//     if (typeof "string" == "string") {
//         return true;
//     } else {
//         return false;
//     }

// }
// console.log(checkString("My random string"));
// console.log(checkString(""));
// console.log(checkString(123));


// Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

// function isStringBlanc(string) {
//     if (typeof 'string'== 'string' && string.length==0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isStringBlanc("My random string"));
// console.log(isStringBlanc(""));
// console.log(isStringBlanc(123));



// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

// function concatenation(string, number) {
//     var newString ='';
//     for (i = 0; i < number; i++) {
//         newString += string;
//     }
//     return newString;
// }

// console.log(concatenation("Ha", 3))

// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

// function letterOccurrences(string, letter) {
//     var count = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] == letter) {
//             count++
//         }
//     }
//     return count
// }

// console.log(letterOccurrences("My random string", 'i'))

// Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

// function firstOccurrence(string, letter) {

//     for (var i = 0; i < string.length; i++) {
//         var newLetter = string[i];
//         if (newLetter == letter) {
//             return i += 1;
//         }
//     }
//     return -1
// }

// var firstPosition = firstOccurrence("My random string", "i");
// console.log(firstPosition)
// console.log(firstOccurrence("My random string", 'r'))


// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

// function lastOccurrence(string, letter) {
//     var i;
//     var position=string.length-1;

//     for (i=position; i >= 0; i--) {
//         var newLetter = string[i];
//         if (newLetter == letter) {
//             return i + 1;
//         }
//     }
//     return -1;
// }


// console.log(lastOccurrence("My random string", "i"))


// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

function stringToArray(string) {
    var array = [];
    var blancString = ' ';
    for (i = 0; i < string.length; i++) {
        var lastIndexOfArray = array.length;
        if (string[i] == blancString) {
            array[lastIndexOfArray] = null; // za slucaj da nam se razi da nesto izbacimo iz niza
        } else {
            array[lastIndexOfArray] = string[i];
        }
    }
    return array;
}

console.log(stringToArray("My random string", "s"));

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

// Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

//  Write a function to get the first n characters and add “...” at the end of newly created string.

//  Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

//  Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

// Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

// Hint: num % 100 >= 11 && num % 100 <= 13
// // 