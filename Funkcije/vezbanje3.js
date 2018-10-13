// Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function minimum_value(a) {
    var i;
    var minimum = a[0];
    var index = 0;

    for (i = 0; i < a.length; i++) {

        if (minimum > a[i]) {
            minimum = a[i];
            index = i;
        }
    }

    return console.log(minimum, index);


}

var test = minimum_value([4, 2, 2, -1, 6])
