// 1.Write a program that calculates the maximum of two given numbers.

// var a = 5;
// var b = 2;

// function max(x, y) {
//     if (x > y) {
//         console.log(x);
//     } else {
//         console.log(y);
//     }
// }

// max(a, b);

//2.Write a program that checks if a given number is odd.

// var a = 27;

// function odd(num) {
//     if (num % 2 != 0) {
//         console.log("Number IS odd");
//     } else {
//         console.log("Number IS NOT odd")
//     }
// }

// odd(a);


// 3.Write a program that checks if a given number is a three digit long number.

// a = 3210;

// function isThreeDigit(num) {
//     var count = 0;
//     for (var i = num; i >= 1; i /= 10) {
//         count++;
//     }
//     if (count == 3) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }


// 4.Write a program that calculates an arithmetic mean of four numbers.

// var a = 1,
//     b = 2,
//     c = 3,
//     d = 4;

// function aritMean4(a, b, c, d) {
//     var result = (a + b + c + d) / 4;
//     console.log(result);
// }

// aritMean4(a, b, c, d);

// function aritMean() {
//     var sum = 0;
//     var result;
//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     result = sum / arguments.length;
//     console.log(result);
// }

// aritMean(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 5.Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *
// *****

// function drawSquare(n) {
//     if (n % 2 != 0) {
//         var str = "";
//         for (var i = 0; i < n; i++) {
//             for (var j = 0; j < n; j++) {
//                 if (i == 0 || i == n - 1) {
//                     str += "*";
//                 } else {
//                     if (j == 0 || j == n - 1) {
//                         str += "*";
//                     } else {
//                         str += " ";
//                     }
//                 }
//             }
//             console.log(str);
//             str = "";
//         }
//     } else {
//         console.log("Error! Number must be odd!");
//     }
// }

// function drawX(n) {
//     if (n % 2 != 0) {
//         var str = "";
//         for (var i = 0; i < n; i++) {
//             for (var j = 0; j < n; j++) {
//                 if (i == j || i + j == n - 1) {
//                     str += "*";
//                 } else {
//                     str += " ";
//                 }
//             }
//             console.log(str);
//             str = "";
//         }
//     } else {
//         console.log("Error! Number must be odd!");
//     }
// }

// function drawCross(n) {
//     if (n % 2 != 0) {
//         var str = "";
//         for (var i = 0; i < n; i++) {
//             for (var j = 0; j < n; j++) {
//                 if (i != (n - 1) / 2) {
//                     if (j != (n - 1) / 2) {
//                         str += " ";
//                     } else {
//                         str += "*";
//                     }
//                 } else {
//                     str += "*";
//                 }
//             }
//             console.log(str);
//             str = "";
//         }
//     } else {
//         console.log("Error! Number must be odd!");
//     }
// }

// drawSquare(11);
// drawX(11);
// drawCross(11);


// 6.Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

// function horDraw() {
//     var str = "";
//     for (var i = 0; i < arguments.length; i++) {
//         for (var j = 0; j < arguments[i]; j++) {
//             str += "*";
//         }
//         console.log(str);
//         str = "";
//     }
// }

// horDraw(5, 3, 7, 9, 1, 13, 11, 15);

// 7.Write a program that calculates a number of digits of a given number.
// isThreeDigit(a);

// function numLength(num) {
//     var count = 0;
//     for (var i = num; i >= 1; i /= 10) {
//         count++;
//     }
//     console.log("Number is " + count + " digit long");
// }

// numLength(a);


// 8.Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

// function appearances(arr, num){
//     var count = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] == num){
//             count++;
//         }
//     }
//     console.log(count);
// }

// appearances([2, 4, 7, 8, 7, 7, 1], 7);

// 9.Write a program that calculates the sum of odd elements of a given array.

// function oddSum(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             sum += arr[i];
//         }
//     }
//     console.log("Sum of odd elements is: " + sum);
// }

// oddSum([2, 4, 7, 8, 7, 7, 1]);


// 10.Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

// function letterAppearances(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == "a" || str[i] == "A") {
//             count++;
//         }
//     }
//     console.log("Letters 'A'/'a' appears " + count + " time(s) in a string: " + "'" + str + "'");
// }

// letterAppearances("Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.");


// 11.Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

// function concatenater(str, n) {
//     if (n == undefined) {
//         n = 1;
//     }
//     var longStr = "";
//     for (var i = 0; i < n; i++) {
//         longStr += str;
//     }
//     console.log(longStr);
// }

// concatenater("Ha", 5);