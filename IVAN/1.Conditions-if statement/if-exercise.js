// var age = -12;

// if(age > 120){
//     console.log("You are one old ass motherfucker!");
// } else if(age <= 0){
//     console.log("You are still shaking in your fathers balls!");
// } else if(age > 0 && age < 120){
//     console.log(age);
// }

// var currentSpeed = 180;

// if(currentSpeed > 120){
//     console.log("Your current speed is: " + currentSpeed + "km/h. Slow down! You are in danger, you are driving over the the speed limit!");
// } else {
//     console.log("Your current speed is: " + currentSpeed + "km/h. You are safe! Have a nice trip!");
// }

// 1.Write a program that compares two numbers and display the larger. Result should be displayed in the console.

// var a = 5;
// var b = 3;

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// 2.Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.
// Sample numbers: 3, 4, 9 (check one at the time)
// Output: odd, even, odd

// var a = 9;

// if (a % 2 == 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// 3.Write a program to check if the number is divisible by 3 and 5. If it is, print that number.

// Sample numbers: 15, 12 (check one at the time)
// Output: 15 

// var a = 15;

// if(a % 3 == 0 && a % 5 == 0){
//     console.log(a);
// }

// 4.Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
// Sample numbers: 3, -7, 2 
// Output: The sign is - 

// var a = 3;
// var b = -7;
// var c = 2;

// if (a * b * c < 0) {
//     console.log("-");
// } else {
//     console.log("+");
// }

// 5.Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”
// Sample numbers: 10 | 7 (check one at the time)
// Output: 10 / 2 = 5 | X 

// var a = 7;

// if (typeof a === "number" && a % 2 === 0) {
//     console.log(a / 2);
// } else {
//     console.log("X");
// }

// 6.Write a conditional statement to find the largest of five numbers. Display the result in console.

// Sample numbers: -5, -2, -6, 0, -1 
// Output: 0

// var a = -5;
// var b = -2;
// var c = -6;
// var d = 0;
// var f = -1;

// if (a < b) {
//     a = b;
// }
// if (a < c) {
//     a = c;
// }
// if (a < d) {
//     a = d;
// }
// if (a < f) {
//     a = f;
// }
// console.log(a);

// 7.Write a conditional statement to sort three numbers.

// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1

// var a = 0;
// var b = -1;
// var c = 4;
// var max1, max2, max3;
// ------Solution no.1------
// if (a > b && a > c && b > c) {
//     console.log(a, b, c);
// } else if (a > b && a > c && b < c) {
//     console.log(a, c, b);
// } else if (b > a && b > c && a > c) {
//     console.log(b, a, c);
// } else if (b > a && b > c && a < c) {
//     console.log(b, c, a);
// } else if (c > b && c > a && b > a) {
//     console.log(c, b, a);
// } else {
//     console.log(c, a, b)
// }
// ------Solution no.2------
// if (a > b) {
//     max1 = a;
//     max2 = b;
//     if (max2 > c) {
//         max3 = c;
//     } else if (max1 > c) {
//         max3 = max2;
//         max2 = c;
//     } else {
//         max3 = max2;
//         max2 = max1;
//         max1 = c;
//     }
// } else {
//     max1 = b;
//     max2 = a;
//     if (max2 > c) {
//         max3 = c;
//     } else if (max1 > c) {
//         max3 = max2;
//         max2 = c;
//     } else {
//         max3 = max2;
//         max2 = max1;
//         max1 = c;
//     }
// }

// console.log(max1, max2, max3);
// ------Solution no.3------
// if (a > b && a > c) {
//     if (b > c) {
//         console.log(a + ", " + b + ", " + c);
//     } else {
//         console.log(a + ", " + c + ", " + b);
//     }
// } else if (b > a && b > c) {
//     if (a > c) {
//         console.log(b + ", " + a + ", " + c);
//     } else {
//         console.log(b + ", " + c + ", " + a);
//     }
// } else if (c > a && c > b) {
//     if (a > b) {
//         console.log(c + ", " + a + ", " + b);
//     } else {
//         console.log(c + ", " + b + ", " + a);
//     }
// }
