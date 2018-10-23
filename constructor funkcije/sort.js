// var a = [11, 5, 2, 8, 9];

// function sort(array) {
//     var i;
//     var j;
//     for (i = 0; i < array.length; i++) {
//         var element = array[i];
//         for (j = i + 1; j < array.length; j++) {
//             if (array[j] < element) {
//                 var tmp = array[j];
//                 array[j] = element;
//                 element = tmp;
//             }
//         }
//         array[i] = element;
//     }
// }

// sort(a);
// console.log(a);


// var a = [55, 666, 7, 8, 10];

// function sort(array) {

//     var i;
//     var j;
//     for (i = 0; i < array.length - 1; i++) {

//         for (j = 0; j < array.length - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 var tmp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = tmp;
//             }
//         }

//     }

//     return array;

// }

// sort(a);

// console.log(a)

var a = [4, 6, 7, 9];
for (var i = o; i < a.length; i++) {
    console.log(a[i]);
}


var a = [4, 6, 7, 9];

// //o-4
// 1-6
// 2-7
// 3-9
// 4-10
for (var i in a) {
    console.log(a(i));
}

var o = {
    x: 10,
    y: 11,
    z: 20
};
// console.log(o.x);
// console.log(o.property);

for (var property in o) {
    console.log(o[property]);
}

var obj = new Object();
obj.x = 10;
obj.y = 20;

//koristimo kada hocemo da promenimo osobine svojstava, ove tri promene su ugradjene u program. Po defoltu su sve tri true.

Object.defineProperty(obj, 'z', {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: true,
})
console.log(obj);

obj.x = 15;
obj.z = 15;

console.log(obj)