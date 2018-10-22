// 1.Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false

// function isString(str){
//     if(typeof str == "string"){
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// isString("Am I a string?");

// 2.Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

// function isBlank(x){
//     if(x == " "){
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// isBlank("12");

// 3.Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

// function concatinator(str, n) {
//     if (typeof str == "string" && typeof n == "number") {
//         var newStr = "";
//         for (var i = 0; i < n; i++) {
//             newStr += str;
//         }
//         console.log(newStr);
//     } else {
//         console.log("False entery! e.i('abc', 5)");
//     }
// }

// concatinator("bla ", 10);

// 4.Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

// function charCounter(str, char) {
//     if (typeof str == "string" && typeof char == "string") {
//         var count = 0;
//         for (var i = 0; i < str.length; i++) {
//             if (str[i] == char) {
//                 count++;
//             }
//         }
//         console.log(count);
//     } else {
//         console.log("False entery! e.i('abc', 'b')");
//     }

// }

// charCounter("My random string", "n");

// 5.Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

// function charPosition(str, char) {
//     if (typeof str == "string" && typeof char == "string") {
//         var position;
//         for (var i = 0; i < str.length; i++) {
//             if (str[i] == char) {
//                 position = i + 1;
//                 return position;
//             }
//         }
//         if (i == str.length) {
//             return -1;
//         }
//     } else {
//         var error = "False entery! e.i('string', 'n')"
//         return error;
//     }

// }

// result = charPosition("Web development", "e");
// console.log(result);

// 6.Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

// function occ(str, char) {
//     if (typeof str == "string" && typeof char == "string") {
//         var indexMarker = [];
//         for (var i = 0; i < str.length; i++) {
//             if (str[i] == char) {
//                 indexMarker[indexMarker.length] = i;
//             }
//         }
//         var result = indexMarker[indexMarker.length - 1] + 1;
//         return result;
//     } else {
//         var error = "False entery! e.i(\"abc\", \"a\")";
//         return error;
//     }
// }

// console.log(occ("stringind", 2));

// 7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

// var string = "My random s";

// function stringToArray(str) {
//   var arr = [];
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//       arr[arr.length] = str[i];
//     } else {
//       arr[arr.length] = null;
//     }
//   }
//   return arr;
// }
// console.log(stringToArray(string));

// 8.Write a function that accepts a number as a parameter and checks if the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// function isPrime(x) {
//   var res = true;
//   for (var i = 2; i < x / 2; i++) {
//     if (x % i == 0) {
//       res = false;
//       break;
//     }
//   }
//   return res;
// }

// if (isPrime()) {
//   console.log("Number is prime");
// } else {
//   console.log("Number isn't prime");
// }

//  9.Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

// function spaceChanger(s, c) {
//   if (c == undefined) {
//     c = "-";
//   }
//   var ns = "";
//   for (var i = 0; i < s.length; i++) {
//     if (s[i] != " ") {
//       ns += s[i];
//     } else {
//       ns += c;
//     }
//   }
//   return ns;
// }

// console.log(spaceChanger("My random string"));

//  10.Write a function to get the first n characters and add “...” at the end of newly created string.

// function shortener(s, n) {
//   var ns = "";
//   for (var i = 0; i < n; i++) {
//     ns += s[i];
//   }
//   console.log((ns += "..."));
// }

// shortener("AnavoliMilovana", 7);

//  11.Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

// function newArray(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         var test = arr[i] * 1;
//         if (typeof test == "number" && test != Infinity) {
//             if (test != test) {
//                 continue;
//             } else {
//                 newArr[newArr.length] = test;
//             }
//         }
//     }
//     console.log(newArr);
// }

// newArray(["1", "21", undefined, "42", "1e+3", Infinity]);

// function newArray1(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] / arr[i] === 1) {
//             newArr[newArr.length] = arr[i] * 1;
//         }
//     }
//     console.log(newArr);
// }

// newArray1(["1", "21", undefined, "42", "1e+3", Infinity]);

// 12.Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

// function ret(year, sex) {
//   var per = 2018 - year;
//   if (sex == "m") {
//     console.log(65 - per);
//   } else {
//     console.log(60 - per);
//   }
// }

// ret(1991, "m");

// 13.Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

// Hint: num % 100 >= 11 && num % 100 <= 13

// function humanizeNum(num) {
//   if (num % 100 >= 11 && num % 100 <= 13) {
//     num += "th";
//     return num;
//   } else {
//     if (num % 10 >= 1 && num % 10 <= 3) {
//       switch (num % 10) {
//         case 1:
//           num += "st";
//           break;
//         case 2:
//           num += "nd";
//           break;
//         case 3:
//           num += "rd";
//       }
//       return num;
//     } else {
//       num += "th";
//       return num;
//     }
//   }
// }

// var humNum = humanizeNum(5);
// console.log(humNum);