// 1)
var obj = {
    x: 10,
    y: 5
};

console.log(obj);

// 2)
var obj = Object.create({ z: 20 }); // {z:20} je proto Object
obj.x = 10;
obj.y = 5;


Object.defineProperty(obj, 'x', {
    value: 10,
    writable: true,

});


///////// Primena PROTOTYPE-a ///////////



function Person(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
}

Person.prototype.print = function () {
    console.log(this.name + ' ' + this.surname)
}

Person.prototype.email = "test@gmail.com";

var pera = new Person('pera', 'peric', 'p@gmail.com');
var zika = new Person('zika', 'zikic', 'z@gmail.com');
var laza = new Person('laza', 'lazic', 'l@gmail.com');

console.log(pera.email);
console.log(pera.__proto__.email);

var personPrototype = Object.getPrototypeOf(pera);
Object.getPrototypeOf(personPrototype).message = 'Hello!';

// console.log(laza.message);





var obj = Object.create({ y: 20 });
obj.x = 10;
console.log(obj.message);