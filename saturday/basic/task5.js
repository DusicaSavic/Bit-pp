
// Write a function that checks if the two arrays are equal.

function arraysAreEqual(array1, array2) {
    var result;

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]) {
            result = 'Arrays are same';
        } else {
            result = 'Arrays are not same';
            return result;
        }
    }
    return result;
}



console.log(arraysAreEqual([2, 5, 3], [2, 5, 3]))


function arraysAreEqual(array1, array2) {
    var result;

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return result = 'Arrays are not same';
        }
    }
    return result;
}



console.log(arraysAreEqual([2, 5, 5, 3], [2, 5, 3]))