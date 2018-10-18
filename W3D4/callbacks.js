var a = [1, 2, 3, 4, 5];

// [1, 2, 3] --> [1, 4, 9]


function squareArray(array) {

    var newArray = [];

    for (var i = 0; i < array.length; i++) {

        newArray[i] = array[i] * array[i];
    }

    return newArray;
}


// console.log(squareArray(a));



// [1, 2, 3] --> [2, 4, 6]

function doubleArray(array) {

    var newArray = [];

    for (var i = 0; i < array.length; i++) {

        newArray[i] = 2 * array[i];
    }

    return newArray;
}

// var a = [1, 2, 3, 4, 5];
// console.log(doubleArray(a));


///////////////////////////

function transformArray(array, transformation) {          // potpis funkcije(?)

    var newArray = [];

    for (var i = 0; i < array.length; i++) {

        newArray[i] = transformation(array[i]);
    }

    return newArray;
}



function square(n) {      // CALLBACK funkcija
    return n * n;
}

function double(n) {     // CALLBACK funkcija druge funkcije
    return 2 * n;
}

function addOne(n) {
    return n + 1;
}

// var result;
// result = transformArray(a, square);
// console.log(result);


var result;
result = transformArray(a, function (n) { return n + 1; });
console.log(result);