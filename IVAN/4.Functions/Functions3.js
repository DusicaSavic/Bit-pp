// 1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

// function insertor(str, ins, n){
//     var newStr = "";
//     for(var i = 0; i < str.length; i++){
//         if(i != n){
//             newStr += str[i]; 
//         } else {
//             for(var j = 0; j < ins.length; j++){
//                 newStr += ins[j];
//             }
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

// console.log(insertor("My random string", "JS ", 10));


// 2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

// function numArr(arr){
//     var nums = [];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] / arr[i] === 1 || arr[i] === 0){
//             nums[nums.length] = arr[i];
//         }
//     }
//     return nums; 
// }

// console.log(numArr([NaN, 0, 15, false, -22, '', undefined, 47, null]));


// 3.Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

// function truthyArr(arr){
//     var tru = [];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i]){
//             tru[tru.length] = arr[i];
//         }
//     }
//     console.log(tru);
// }

// truthyArr([NaN, 0, 15, false, -22, '', undefined, 47, null]);


// 4.Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number

// function reverseNum(num){
//     var x = "" + num;
//     var rev = "";
//     for(var i = x.length -1; i >= 0; i--){
//         rev += x[i];
//     }
//     return parseInt(rev);
// }

// console.log(reverseNum(12345));


// 5.Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2] 

// function lastElement(arr, n){
//     if(n == undefined){
//         n = 1;
//     }
//     var newArr = [];
//     for(var i = arr.length - n; i < arr.length; i++){
//         newArr[newArr.length] = arr[i];
//     }
//     console.log(newArr);
// }

// lastElement([7, 9, 0, -2]);


// 6.Write a function to create a specified number of elements with pre-filled numeric value array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

// function reserveArr(a, b){
//     if(b == undefined){
//         b = null;
//     }
//     var arr = [];
//     for(var i = 0; i < a; i++){
//         arr[arr.length] = b;
//     }
//     return arr;
// }

// console.log(reserveArr(6));


// 7.Write a function that says whether a number is perfect.
// 28 -> 28 is a perfect number.
// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// function isPerfect(num){
//     var sum = 0;
//     for(var i = 1; i <= num / 2; i++){
//         if(num % i == 0){
//             sum += i;
//         }
//     } 
//     if(sum == num){
//         return true;
//      } else {
//         return false;
//     }
// }

// console.log(isPerfect(29));

// function perfectNums(n){
//     for(var i = 1; i < n; i++){
//         if(isPerfect(i)){
//             console.log(i);
//         }
//     }
// }

// perfectNums(1000);


// 8.Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

// function search(txt, wrd){
//     var arr = [];
//     var e = "";
//     txt += " ";
//     for(var i = 0; i < txt.length; i++){
//         if(txt[i] != " "){
//             e += txt[i];
//         } else {
//             arr[arr.length] = e;
//             e = "";
//         }
//     }
//     var count = 0;
//     for(var j = 0; j < arr.length; j ++){
//         if(arr[j] == wrd){
//             count++;
//         }
//     }
//     console.log(count);
// }

// search("The quick brown fox", "fox");

// 9.Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

// function email(mail) {
//     var str = "";
//     for (var i = 0; i < mail.length; i++) {
//         if (i < 3) {
//             str += mail[i];
//         } else {
//             if (mail[i] == "@") {
//                 str += "...";
//                 for (var j = i; j < mail.length; j++) {
//                     str += mail[j];
//                     i++;
//                 }
//             }
//         }
//     }
//     return str;
// }

// console.log(email("balicivan2@gmail.com"));

// 10.Write a program to find the most frequent item of an array.
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

// function mostFrequent(arr) {
//     str = "";
//     groups = [];
//     var x;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 str += arr[j];
//             }
//         }
//         groups[groups.length] = str;
//         str = "";
//     }
//     for (var i = 0; i < groups.length; i++) {
//         for (var j = 1; j < groups.length; j++) {
//             if (groups[j - 1].length < groups[j].length) {
//                 x = groups[j - 1];
//                 groups[j - 1] = groups[j];
//                 groups[j] = x;
//             }
//         }
//     }
//     console.log(groups[0][0]);
// }

// mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);

// function mostFrequent(arr) {
//     var str = "";
//     var groups = [];
//     var x;
//     for (var i = 0; i < arr.length; i++) {
//         for (var k = groups.length; k >= 0; k--) {
//             if (groups[0] == undefined || groups[k][0] == arr[i]) {
//                 continue;
//             } else {
//                 for (var j = i; j < arr.length; j++) {
//                     if (arr[i] == arr[j]) {
//                         str += arr[j];
//                     }
//                 }
//                 groups[groups.length] = str;
//                 str = "";
//             }
//         }
//     }
//     for (var i = 0; i < groups.length; i++) {
//         for (var j = 1; j < groups.length; j++) {
//             if (groups[j - 1].length < groups[j].length) {
//                 x = groups[j - 1];
//                 groups[j - 1] = groups[j];
//                 groups[j] = x;
//             }
//         }
//     }
//     console.log(groups[0][0]);
// }

// mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);