(function () {
    console.log("Hello from IIFE!");
})();

function outer() {

    function inner() {
        console.log("inner");
    }

    inner();
    console.log("outer");
}

outer();




function outer() {

    var inner = function () {
        console.log("inner");
    }
    return inner;
}

var result;
result = outer();

console.log(result);





function outer() {

    var inner = function (name) {
        console.log("inner: hello", name);
    }
    return inner;
}

var result;
result = outer();
result("svi");

console.log(result);





outer()("svi");



//[1,2,3]-->[1,4,9]

function squareArray() {
    var newArray = [];
    for (var i = 0; i < Array.length; i++) {
        newArray[i] = array[i] * array[i];

    }
    return newArray;

}
var a = [1, 2, 3, 4, 5];
console.log(squareArray(a));



//[1,2,3]-->[1,4,9]

function transformArray(array, transformation) {
    var newArray = [];
    for (var i = 0; i < Array.length; i++) {
        newArray[i] = transformation(array[i]);

    }
    return newArray;
}



function square(n) {
    return n * n;
}
function double(n) {
    return2 * n;

}
var result;
result = treansformArray(a, double);
console.log(result);

