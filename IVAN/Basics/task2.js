// 2.Write a function that checks if the number is positive or negative.
var isPositiveOrNegative = function () {
    var arrayOfAnswers = [];
    var j = 0;
    for (var i = 0; i < arguments.length; i++) {
        var num = arguments[i];
        if (num > 0) {
            arrayOfAnswers[j] = num + " is positive";
        } else if (num < 0) {
            arrayOfAnswers[j] = num + " is negative";
        } else {
            arrayOfAnswers[j] = num;
        }
        j++;
    }
    return arrayOfAnswers;
};

function printer(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
var result = isPositiveOrNegative(1, 0, -9, 8, -15, 1.58, 7895);
printer(result);
