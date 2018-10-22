// Try to solve all assignments on a separate branch. Keep in mind that you should try to use built-in objects and their methods, solo or combined. You should use loops only for the 4 and 10 assignment, all others can be solved using built-in object methods. 

// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

// 'ff', 16, 8 -> 377

// 2.Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321
// var num = 12345;
// function reverseNumber(n) {
//     var numToString = new String(n);
//     // numToString = numToString.split("");
//     // numToString = numToString.reverse();
//     // numToString = numToString.join("");
//     // numToString = parseInt(numToString);
//     // return numToString;
//     return parseInt(numToString.split("").reverse().join(""));
// }

// var result = reverseNumber(num);
// console.log(typeof result);
// console.log(result);


// 3.Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

// function stringLettersToAlphabet(string) {
//     // var aplhabeticalString = string.toLowerCase().split('');
//     // aplhabeticalString.sort();
//     // aplhabeticalString = aplhabeticalString.join("");
//     // return aplhabeticalString;
//     return string.toLowerCase().split("").sort().join("");
// }

// console.log(stringLettersToAlphabet('Webmaster'));

// 4.Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

// function alphabetizing(string) {
//     var arrayOfWords = string.split(" ");
//     for (var i = 0; i < arrayOfWords.length; i++) {
//         var currentWord = arrayOfWords[i];
//         // var arrayOfCurrentWord = currentWord.split("");
//         // currentWord = arrayOfCurrentWord.sort().join("");
//         arrayOfWords[i] = currentWord.split("").sort().join("");
//     }
//     return arrayOfWords.join(" ");
// }

// console.log(alphabetizing("Republic Of Serbia"));

// 5.Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]

//----FUNCTION DECLARATION------
// function stringToArray(string) {
//     var newString = string.split(' ');

//     console.log(newString);
// }

// stringToArray("John Snow");

//------SELF INVOKING FUNCTION-----

// (function (string) {
//     var newString = string.split(' ');

//     console.log(newString);
// })("John Snow");


// 6.Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."
// function abbreviatedForm(string) {
//     var arrayOfWords = string.split(" ");
//     var lastWord = arrayOfWords[arrayOfWords.length - 1];
//     var shortedWord = lastWord.split("").slice(0, 1).concat(".");
//     arrayOfWords[arrayOfWords.length - 1] = shortedWord;
//     return arrayOfWords.join(" ");
// }

// console.log(abbreviatedForm("John Snow"));

// Write a function that can pad (left, right) a string to get to a determined length.

// 	'0000', 123, 'l' -> 0123 
// '00000000', 123, 'r' -> 12300000

// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

// Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"

// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
