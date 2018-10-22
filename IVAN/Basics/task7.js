// 7.Write a function that prints out number of input arguments of the function.
var func = function () {
    var numOfArguments = arguments.length;
    return (function () {
        console.log(numOfArguments);
    })();
}

func(1, "string", 3, true, undefined, null, NaN, "abc");