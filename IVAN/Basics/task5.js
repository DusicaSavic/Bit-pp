// 5.Write a function that checks if the two arrays are equal.

var isTwoArrayEqual = function (array1, array2) {
    if (array1.length != array2.length) {
        return false;
    } else {
        for (var i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                return false;
            }
        }
        return true;
    }
};

function messageGenerator(result) {
    if (result) {
        console.log("Arrays are equal!");
    } else {
        console.log("Arrays are not equal!");
    }
}

var isEqual = isTwoArrayEqual([1, 2, 3, 4], [1, 2, 3, 4]);
messageGenerator(isEqual);
