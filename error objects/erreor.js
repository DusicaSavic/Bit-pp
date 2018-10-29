var a = [3, 8, 11, 24, 6];
var index = 7;
try {
    if (typeof index != 'number') {
        var typeError = new TypeError('Index has to be a number');
        throw typeError;
    }
    if (index < 0 || index >= a.length) {
        var rangeError = new RangeError('Index is not in range');
        throw rangeError;
    } else {
        console.log(a[index]);
    }
}
catch (error) {
    if (error instanceof TypeError) {
        console.log("Type Error: ", error.message)
    } else {
        console.log("Range Error: ", error.message)
    }
}