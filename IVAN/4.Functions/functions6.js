// 1.Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.

// var count = function (char) {
//     var count = 0;
//     for (var pos = str.toLowerCase().indexOf(char); pos != -1; pos = str.toLowerCase().indexOf(char, pos + 1)) {
//         count++;
//     }
//     return count;
// };

// function vowels()

// vowels("Ana");

// function vowels1(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         switch (str.toLowerCase()[i]) {
//             case "a":
//                 count++;
//                 break;
//             case "e":
//                 count++;
//                 break;
//             case "i":
//                 count++;
//                 break;
//             case "o":
//                 count++;
//                 break;
//             case "u":
//                 count++;
//         }
//     }
//     console.log(count);
// }

// vowels1("My random string aaaaa");


// 2.Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]



// 3. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

// var rotate = function (list, k) {
//     var arr = [];
//     for (var i = k; i < list.length; i++) {
//         arr[arr.length] = list[i];
//     }
//     for (var i = 0; i < k; i++) {
//         arr[arr.length] = list[i];
//     }
//     console.log(arr);
// }

// rotate([1, 2, 3, 4, 5, 6], 5);


// 4.Write a function that takes a number and returns array of its digits.

// var arrOfDig = function (num) {
//     var digits = [];
//     var digitsRev = [];
//     for (var i = num; i > 1; i = (i - i % 10) / 10) {
//         digits[digits.length] = i % 10;
//     }
//     for (var i = digits.length - 1; i >= 0; i--) {
//         digitsRev[digitsRev.length] = digits[i];
//     }
//     console.log(digitsRev);
// };

// arrOfDig(356);



// 5.Write a program that prints a multiplication table for numbers up to 12.

// function buff(val){
//     var buff = '';
//     var pad = 4 - val;
//       while( pad-- > 0 )
//               buff += ' ';            
//     return buff;
//   }

// var multiplicationTable = function (num) {
//     var result = "";

//     for (var i = 1; i <= num; i++) {
//         for (var j = 1; j <= num; j++) {
//             result += buff((i*j+'').length ) + i * j;
//         }
//         console.log(result);
//         result = "";
//     }
// }

// multiplicationTable(12);

// 6.Write a function to input temperature in Centigrade and convert to Fahrenheit.



// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.



// Write a function to find the maximum and minimum elements. Function returns an array.



// Write a function to find the median element of array.



// Write a function to find the element that occurs most frequently.



// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.



// Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.



// Write a function to find all the numbers greater than the average.



// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40




// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********