function set(a) {
  a = 10;
  console.log(a);
}

var a = 15;
set(a);
console.log(a);

function setArray(arr) {
  arr[0] = 10;
  console.log(arr);
}
var a = [5, 6, 7, 8, 9];
setArray(a);
console.log(a);
