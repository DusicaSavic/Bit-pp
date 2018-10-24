// Try to use built-in object methods to solve some of the problems here

// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

// function duplicateElements(array) {

//     var res = [];
//     var c = 0;

//     for (i = 0; i < array.length; i++) {

//         res[c] = array[i];

//         c++;

//         res[c] = array[i];

//         c++;

//     }

//     return res;
// }
// var Input = [2, 4, 7, 11, -2, 1];
// console.log(duplicateElements(Input))

// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

// function removeDuplicates(array) {

//     var c = 0;

//     array.sort(function (a, b) {
//         return a - b;
//     })

//     console.log(array);
//     var newArray = [];

//     for (i = 0; i < array.length; i++) {
//         if (array[i] !== array[i + 1]) {

//             newArray[c] = array[i];
//             c++;
//         }
//     }
//     return newArray;

// }

// var Input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// console.log(removeDuplicates(Input))

// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// function OddNumInArray(array) {
//     for (i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             return true;
//         }
//     }
//     return false;
// }

// var Input = [1, 2, 9, 2, 1];
// console.log(OddNumInArray(Input));

// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// function evenNumberOfElements(array) {
//     var res;

//     if (array.length % 2 !== 0) {
//         for (i = 0; i < array.length / 2; i++) {
//             res = array[i];
//         }
//     } else {
//         return "error";
//     }

//     return res;
// }

// var Input = [8.1, 3, 6, 2.3, 44, 2.11];
// console.log(evenNumberOfElements(Input));

// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

// function smallestElement(array) {
//     var min = array[0];

//     for (i = 0; i < array.length; i++) {
//         if (min > array[i]) {
//             min = array[i];

//         }
//     }
//     return {
//         arrayMinimum: min,
//         index: array.lastIndexOf(min)
//     };
// }

// var Input = [1, 4, -2, 11, 8, 1, -2, 3];
// console.log(smallestElement(Input));

// Write a function that finds all the elements in a given array less than a given element.
// 	Input: [2, 3, 8, -2, 11, 4], 6
// 	Output: [2, 3, -2, 4]

// function lessElement(array, element) {
//     var newArray = [];
//     var counter = 0;
//     for (i = 0; i < array.length; i++) {
//         if (array[i] < element) {
//             newArray[counter] = array[i];
//             counter++;
//         }
//     }
//     return newArray;
// }

// var Input = [2, 3, 8, -2, 11, 4];
// var a = 6;
// console.log(lessElement(Input, a));

// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// 	Output: [’Programming’, ‘product’]

// function proSubstring(array) {
//     var arrayNew = [];

//     // console.log(arrayNew)

//     //1
//     for (i = 0; i < array.length; i++) {
//         if (array[i][0] == 'p' && array[i][1] == "r" && array[i][2] == 'o') {
//             console.log(array[i])

//         }
//     }

//     //2
//     for (i = 0; i < array.length; i++) {
//         var word = array[i];
//         var start = word.substring(0, 3).toLowerCase();
//         if (start == "pro") {
//             arrayNew.push(word);
//         }
//     }

//     // 3
//     // if((s[i].indexOf("P")===0||s[i].indexOf("p")===0 ) && s[i].indexOf("r")===1&&s[i].indexOf("o")===2){

//     return arrayNew;

// }

// var Input = ['JavaScript', 'Programming', 'fun', 'product'];
// console.log(proSubstring(Input));

// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.

// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,

// var ShoppingList = [
//   { name: "apples", price: 100 },
//   { name: "milk", price: 133 },
//   { name: "bananas", price: 111 }
// ];
// Write a function that calculates the total price of your shopping list.

// function TottalPrice(array) {
//   var sum = 0;
//   for (i = 0; i < array.length; i++) {
//     sum += array[i].price;
//   }

//   return sum;
// }

// console.log(TottalPrice(ShoppingList));

// // Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
// function AveragePrice(array) {
//   var res;
//   res = TottalPrice(array) / array.length;

//   return parseInt(res);
// }

// console.log(AveragePrice(ShoppingList));

// Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.

// function mostExpensiveProduct(array) {
//   var expensiveproduct = [];

//   for (i = 0; i < array.length; i++) {
//     expensiveproduct[i] = array[i].price;
//     expensiveproduct = expensiveproduct.sort();
//   }

//   return expensiveproduct[expensiveproduct.length - 1];
// }

// console.log(mostExpensiveProduct(ShoppingList));

// Write a function that checks if a given string is written in all capitals.

// Write a function that checks if a given string contains any digits.
// Write a function that checks if a given string is a valid hexadecimal color.
// Write a function that checks if a given number belongs to the interval from 1900 to 2018.
// Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

// Write a function that calculates a number of days to your birthday.
// Input: 25 February
// Output: 5 days

// Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 9 seconds

// Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

// Write a function that calculates the distance between two points in the space.

// Write a function that generates a random integer value between 5 and 20.
// Write a function that generates a random integer value between 50 and 100.
// Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.

//  Write a function that shuffles the elements of a given array.
// 		Input: [3, 6, 11, 2, 9, 1]
// 		Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)

// //
