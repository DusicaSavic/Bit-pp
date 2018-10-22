// 8.Write a function that sets some global variable to the new value.

var global = 25;
console.log(global);

function setGlobal() {
    global = 30;
}

setGlobal();
console.log(global);
