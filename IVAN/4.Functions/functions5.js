// function set (a) {
//     a = 10;
//     console.log(a);
// }

// var a = 15;
// set(a);
// console.log(a);


// function setArray (arr) {
//     arr[0]=10; //postavlja elemtn niza na 10
//     console.log(arr);
// }

// var a = [5, 6, 7, 8, 9];
// setArray (a);
// console.log(a);

//ako se niz prosledio kao argument funkciji, on ce biti trajno promenjen
//ako se primitivna vrednost prosledi f-ji i menja ili koristi, nakon sto f-ja zavrsi svoj posao, promenljiva ima istu vrednost

// ------FUNCTIONS V-------

// 1.Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

// function array(arr) {
//     var max = -Infinity;
//     var min = Infinity;
//     var mini;
//     var maxi;
//     var x;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//             mini = i;
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//             maxi = i;
//         }
//     }
//     x = arr[mini];
//     arr[mini] = arr[maxi];
//     arr[maxi] = x;
//     console.log(arr);
// }

// array([3, 500, 12, 149, 53, 414, 1, 19]);


// 2.Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

// function transform(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] / 2 + 5 != 0) {
//             arr[i] = arr[i] / 2 + 5;
//         } else {
//             arr[i] = 20;
//         }
//     }
//     console.log(arr);
// }

// transform([ 3, 500, -10, 149, 53, 414, 1, 19 ]);


// 3.Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

// var students = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
//     points = [50, 39, 63, 72, 99, 51, 83, 59];

// function grader(s, p) {
//     for (var i = 0; i < s.length; i++) {
//         if (p[i] > 90) {
//             console.log(s[i] + " acquired " + p[i] + " points and earned 10");
//         } else if (p[i] > 80) {
//             console.log(s[i] + " acquired " + p[i] + " points and earned 9");
//         } else if (p[i] > 70) {
//             console.log(s[i] + " acquired " + p[i] + " points and earned 8");
//         } else if (p[i] > 60) {
//             console.log(s[i] + " acquired " + p[i] + " points and earned 7");
//         } else if (p[i] > 50) {
//             console.log(s[i] + " acquired " + p[i] + " points and earned 6");
//         }
//     }
// }

// grader(students, points);


// 4.(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

// 5.(skip :))Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

// 6.Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

// function calc() {
//     var sum = 0;
//     for (var i = 1; i <= 1000; i++) {
//         if (i % 2 == 0) {
//             sum += i;
//         } else if (i <= 500) {
//             if (i % 2 != 0) {
//                 sum -= i;
//             }
//         }
//     }
//     console.log(sum * 12.5);
// }

// calc();


// 7.Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

// function firstTwo(arr) {
//     var str = "";
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == "string" && arr[i].length > 1) {
//             str += arr[i][0] += arr[i][1];
//         }
//     }
//     console.log(str);
// }

// firstTwo(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]);


// 8.Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

// function reversed(str) {
//     var newStr = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     console.log(newStr);
// }

// reversed("Belgrade Institute of Technology");


// 9.Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

// function combinations(n) {
//     var count = 0;
//     for (var i = 1; i <= n; i++) {
//         for (var j = 1; j <= n; j++) {
//             if (i != j) {
//                 console.log("(" + i + ", " + j + ")");
//                 count++;
//             }
//         }
//     }
//     console.log(count);
// }

// combinations(7);


// 10.Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

// function isPrime(x) {
//     var res = true;
//     for (var i = 2; i < x / 2; i++) {
//         if (x % i == 0) {
//             res = false;
//             break;
//         }
//     }
//     if (res) {
//         console.log("Number is prime");
//     } else {
//         console.log("Number isn't prime");
//     }
// }

// isPrime(15);


// 11.Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

// function isPalindrom(str) {
//     var ind = true;
//     var pal = "";
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] != " ") {
//             pal += str[i];
//         }
//     }
//     for (var i = 0; i < pal.length / 2; i++) {
//         if (pal[i] != pal[pal.length - 1 - i]) {
//             ind = false;
//             break;
//         }
//     }
//     if (ind) {
//         console.log("The string is palindrom.");
//     } else {
//         console.log("The string isn't palindrom.");
//     }
// }

// isPalindrom("a nut for a jar of tuna");

// 12.Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

// function gcd(x, y) {
//     var d = 1;
//     if (x > y) {
//         for (var i = 1; i <= y; i++) {
//             if (x % i == 0 && y % i == 0) {
//                 d = i;
//             }
//         }
//     } else {
//         for (var i = 1; i <= x; i++) {
//             if (x % i == 0 && y % i == 0) {
//                 d = i;
//             }
//         }
//     }
//     console.log(d);
// }

// gcd(81, 9);