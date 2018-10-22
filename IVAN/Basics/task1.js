// 1.Write a function that prints all numbers between two provided numbers.

// ----FUNC DECLARATION----
function numPrinter(num1, num2) {
    for (var i = num1; i <= num2; i++) {
        console.log(i);
    }
}

numPrinter(1, 10);

// ------SELF EVOKING FUNC----
(function (num1, num2) {
    for (var i = num1; i <= num2; i++) {
        console.log(i);
    }
})(10, 20);

// ------CALLBACK FUNC--------
function consoleLog(x) {
    console.log(x);
}
function numPrinter(num1, num2, printer) {
    for (var i = num1; i <= num2; i++) {
        printer(i);
    }
}
numPrinter(20, 30, consoleLog);

// -------INNER FUNC-RETURNS A FUNC----
var result = (function () {
    return function numPrinter(num1, num2) {
        for (var i = num1; i <= num2; i++) {
            console.log(i);
        }
    }
})();

result(30, 40);