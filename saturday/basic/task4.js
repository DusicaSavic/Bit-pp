// Write a function that checks if the first and the last element in the array or string are the same.

function equalNumbers(array) {
    var result = 'Numbers are not equal'
    for (var i = 0; i < array.length; i++) {
        if (array[0] == array[array.length - 1]) {
            result = 'Numbers are equal'
        }
    }
    return result;
}

console.log(equalNumbers([4, 2, 3, 3, 5]))


