// 1.Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

// function check(arr, e) {
//     var res = false;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === e) {
//             res = true;
//         }
//     }
//     if (res) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }

// check([5, -4.2, 18, 7], 3);


// 2.Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

// function doublePositive(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             arr[i] *= 2;
//         }
//     }
//     console.log(arr);
// }

// doublePositive([-3, 11, 5, 3.4, -8]);


// 3.Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

// function min(arr) {
//     var min = arr[0];
//     var index;
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//             index = i;
//         }
//     }
//     console.log("[" + index + "]: " + min);
// }

// min([4, 2, 2, -1, 6]);

// 4.Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

// function secondMin(arr) {
//     var min1 = arr[0];
//     var min2 = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < min1) {
//             min1 = arr[i];
//         } else if (arr[i] < min2) {
//             min2 = arr[i];
//         }
//     }
//     console.log(min2);
// }

// secondMin([4, 2, 2, -1, 6]);

// 5.Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

// function positiveSum(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     console.log(sum);
// }

// positiveSum([3, 11, -5, -3, 2]);


// 6.Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.

// function isSymmetric(arr) {
//     var ind = true;
//     for (var i = 0; i < arr.length / 2; i++) {
//         if (arr[i] != arr[arr.length - 1 - i]) {
//             ind = false;
//             break;
//         }
//         console.log(arr[i]);
//     }
//     if (ind) {
//         console.log("The array is symmetric.");
//     } else {
//         console.log("The array isn't symmetric.");
//     }
// }

// isSymmetric([2, 4, -2, 7, -2, 4, 2]);


// 7.Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

// ????????????????????
function intertwine() {
    var arrMix = [];
    for (var i = 0; i < arguments.length; i++) {
        var step = arguments.length;
        arrMix[i] = arguments[i][0];
        for (var j = 1; j < arguments[i].length; j++) {
            arrMix[i + step] = arguments[i][j];
            step += arguments.length;
            //step += step - step je postalo 6 u prvoj iteraciji i u sledecoj umesto za 3 uvecalo se za 6
        }
    }
    console.log(arrMix);
}

intertwine([4, 5, 6, 2], [3, 8, 11, 9], [4, 5, 6, 2], [4, 5, 6, 2]);
// ????????????????????????????

// function inter(a, b) {
//     arrMix = [];
//     for (var i = 0; i < a.length; i++) {
//         arrMix[arrMix.length] = a[i];
//         arrMix[arrMix.length] = b[i];
//     }
//     console.log(arrMix);
// }

// inter([4, 5, 6, 2], [3, 8, 11, 9]);


// 8.Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

// function concatenate() {
//     var newArr = [];
//     for (var i = 0; i < arguments.length; i++) {
//         for (var j = 0; j < arguments[i].length; j++) {
//             newArr[newArr.length] = arguments[i][j];
//         }
//     }
//     console.log(newArr);
// }

// concatenate([4, 5, 6, 2], [3, 8, 11, 9, 13], [4, 5, 6, 2], [3, 8, 11, 9]);


// 9.Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

// function del(arr, e) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] != e) {
//             newArr[newArr.length] = arr[i];
//         }
//     }
//     console.log(newArr);
// }

// del([4, 6, 2, 8, 2, 2], 2);


// 10.Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

// var e = 78,
//     p = 3,
//     a = [2, -2, 33, 12, 5, 8];

// function insert(arr, e, p) {
//     if (p > arr.length) {
//         console.log("Error! Position is too high, try with a smaller number")
//     } else {
//         var newArr = [];
//         for (var i = 0; i < arr.length; i++) {
//             if (i != p) {
//                 newArr[newArr.length] = arr[i];
//             } else {
//                 newArr[newArr.length] = e;
//                 newArr[newArr.length] = arr[i];
//             }
//         }
//         console.log(newArr);
//     }
// }

// insert(a, e, p);