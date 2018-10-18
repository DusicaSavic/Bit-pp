(function () {

    console.log("Hello from IIFE!");

})();

//////////////////////////////

function outer() {

    inner = function () {
        console.log("Inner");
    }

    inner();
    console.log("Outer");

}

outer();
console.log(inner);
inner();  // "Inner"

////////////////////////////////

function outer() {

    var inner = function () {
        console.log("Inner");
    }

    return inner;

}


var result;
result = outer();
result();

console.log(result);

///////////////////////////////////

function outer() {

    var inner = function (name) {
        console.log("Inner: hello ", name);
    }

    return inner;

}


outer()('svi');  // nacin da pozovemo odmah unutrasnju funkciju!!!

var result;
result = outer();
result("svi");

console.log(result);

//?????????????????///////////////

function outer(name2) {
    console.log("Hello ", name2)

    var inner = function (name) {
        console.log("Inner: hello ", name);
    }

    return inner;

}


var result;
result = outer();
result("svi", "ja");

console.log(result);

//////////////////////

function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
}

var result = a();
result();

/////////////////////////

