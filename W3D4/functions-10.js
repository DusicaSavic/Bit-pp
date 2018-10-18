// 1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

var array = [4, 5, 11, 9];

(function (arr) {

    var tmp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = tmp;
    console.log(arr);

})(array);

// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20

(function (a, b) {

    var result = a * b;
    console.log(result);

})(4, 5);


// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
// Input: prograMming
// Output: progra**ing, 2


var result = (function (string) {

    var counter = 0;
    var newString = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i] != 'm' && string[i] != 'M') {
            newString = newString + string[i];
        } else {
            newString = newString + '*';
            counter++;
        }
    }

    return [newString, counter];

})('prograMming');

console.log(result[0], result[1]);


//4 .Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
// Output: pera.peric@gmail.com

function emailForName() {

    var email = function (name, surname) {
        console.log(name + '.' + surname + '@gmail.com');
    }

    return email;

}

emailForName()('pera', 'peric');

// 5. Write a function that returns a function that calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28


function octalToDecimal() {

    var result = function (a) {
        console.log(parseInt(a))
    }
    return result;
}

octalToDecimal()(034);




// 6. Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
// Input: JSGuru 
// Output: Your password is invalid!

// Input: JSGuru123
// Output: Your password is cool! 


function success() {
    console.log("Your password is cool!")
}

function error() {
    console.log("Your password is invalid!")
}


function checkPassword(password, successCallback, errorCallback) {

    var lengthCheck;
    var digitCheck;

    if (password.length >= 6) {
        lengthCheck = true;
    }
    else {
        lengthCheck = false;
    }

    // "34abc"
    //  "3" --> parseInt --> 3
    // "a" --> parseInt --> NaN

    digitCheck = false;

    for (var i = 0; i < password.length; i++) {

        var character = password[i];

        // "3", "9" --> 3, 9
        // NaN
        var value = parseInt(character);

        if (!isNaN(value)) {
            digitCheck = true;
            break;
        }
    }

    if (lengthCheck == true && digitCheck == true) {
        successCallback();
    }
    else {
        errorCallback();
    }
}


checkPassword('abc123', success, error);


// 7. Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

function isOdd(num) {
    if (num % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}

function filterArray(array, filter) {

    var newArray = [];
    // var j = 0;

    for (var i = 0; i < array.length; i++) {
        if (filter(array[i])) {
            newArray[newArray.length] = array[i];
            // newArray[j] = array[i];
            // j++;
        }
    }

    return newArray;
}

var result = filterArray([2, 8, 11, 4, 9, 3], isOdd);
console.log(result);


///////////////////////////////////////////

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function filterArray(array, filter) {

    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (filter(array[i])) {
            newArray[newArray.length] = array[i];
        }
    }

    return newArray;
}

var result = filterArray([2, 8, 11, 4, 9, 3], isEven);
console.log(result);


// 6.

function successCallback() {
    console.log('Your password is cool!');
}

function errorCallback() {
    console.log('Your password is invalid!');
}


function checkPassword(password, successCallback, errorCallback) {
    var lengthCheck = false;
    var digitCheck;

    if (password.length >= 6) {
        lengthCheck = true;
    }

    for (var i = 0; i < password.length; i++) {
        if (parseInt(password[i])) { }
    }
}