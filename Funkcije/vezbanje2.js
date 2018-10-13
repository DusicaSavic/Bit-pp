// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiplies_positive_elements(a) {
    var res = [];
    var i;

    for (i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            res[i] = a[i] * 2
        } else {
            res[i] = a[i]
        }
    }

    return res;
}

test = multiplies_positive_elements([-3, 11, 5, 3.4, -8])
console.log(test)