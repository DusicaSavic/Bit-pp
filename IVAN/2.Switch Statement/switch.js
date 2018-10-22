// 1.Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".

// var city = "Beograd";

// switch(city) {
//     case "Beograd":
//     case "Nis":
//     case "Novi Sad":
//         console.log("Srbija");
//         break;
//     case "Madrid":
//     case "Barselona":
//         console.log("Spanija");
//         break;
//     case "Pariz":
//         console.log("Francuska");
//         break;
//     case "Berlin":
//         console.log("Nemacka");
//         break;
//     case "Prag":
//         console.log("Ceska");
//         break;
//     case "Lisabon":
//         console.log("Portugal");
//         break;
//     case "London":
//     case "Liverpul":
//     case "Mancester":
//         console.log("Engleska");
//         break;
//     case "Atina":
//         console.log("Grcka");
//         break;
//     case "Rim":
//         console.log("Italija");
//         break;
//     case "Amsterdam":
//         console.log("Holandija");
//         break;
//     default:
//         console.log("Unesite neki drugi grad");
// }

// 2.Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

// var a = 6;
// var b = 2;
// var operation = "/";

// switch(operation){
//     case "+":
//         console.log(a + b);
//         break;
//     case "-":
//         console.log(a - b);
//         break;
//     case "*":
//         console.log(a * b);
//         break;
//     case "/":
//         if(b == 0){
//         console.log("Division by zero isn't possible");
//         } else {
//             console.log(a / b);
//         }
//         break;
// }

// 3.Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
// For input 1, output should be “Monday”.

// var day = 1;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Thuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Tursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
// }

// 4.Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

// var day = 10;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Thuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Tursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Input must be from 1 to 7");
// }

// 5.Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.

// var day = 6;

// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("It's weekday!");
//         break;
//     case 6:
//     case 7:
//         console.log("It's weekend!");
//         break;
//     default:
//         console.log("Number have to be from 1 to 7");
// }

// 6.Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
// For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.

// var month = 2;

// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     case 4:
//         console.log("Apr");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("Jun");
//         break;
//     case 7:
//         console.log("Jul");
//         break;
//     case 8:
//         console.log("Avg");
//         break;
//     case 9:
//         console.log("Sep");
//         break;
//     case 10:
//         console.log("Oct");
//         break;
//     case 11:
//         console.log("Nov");
//         break;
//     case 12:
//         console.log("Dec");
//         break;
//     default:
//         console.log("Input must be from 1 to 12");
// }

// 7.Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12.

// var month = 2;

// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Winter");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Spring");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Summer");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Autumn");
//         break;
//     default:
//         console.log("Input must be from 1 to 12");
// }

// 8.Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".

// var grade = "A";

// switch (grade) {
//     case "A":
//         console.log("Good job");
//         break;
//     case "B":
//         console.log("Preety good");
//         break;
//     case "C":
//         console.log("Passed");
//         break;
//     case "D":
//         console.log("Not so good");
//         break;
//     case "F":
//         console.log("Failed");
//         break;
//     default:
//         console.log("Unknown grade");
// }

// 9.Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. -----TRY IT WITH SWITCH INSTED OF LOOP-----

// var i = 1;

// switch (i) {
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
//         i++;
//     case i:
//         if (i % 2 == 0) {
//             console.log(i, " is even");
//         } else {
//             console.log(i, " is odd");
//         }
// }