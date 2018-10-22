// 4.Write a function that checks if the first and the last element in the array or string are the same.

function firstAndLastElementChecker() {
    var firstElement = arguments[0][0];
    var lastElement = arguments[0][arguments[0].length - 1];
    if (firstElement === lastElement) {
        return true;
    } else {
        return false;
    }
}

console.log(firstAndLastElementChecker([0, 1, 2, 3, 4, 5, 0]));