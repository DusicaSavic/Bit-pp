var x = 10;
var y = 12;
var z = x;

console.log(x, y, z);

function sum(a, b) {
  //a<--5, b<--10
  return a + b;
}

var n1 = 5;
var n2 = 10;

var result;
result = sum(n1, n2);
console.log(result);

// sve primitivne tipove prenosimo po vrednosti, prilikom pridruzivanja vrednosti ili preuzimanja

var a = [1, 4, 5, 7];
var b = [11, 4, 50, 7];

var c = a;

a[0] = 11;
console.log(c);
c[2] = 50;
console.log(c);
console.log(a);

console.log(a === c); //dobijamo true kao vrednost
console.log(a === b); // u ovom slucaju reference nisu iste iako imaju iste vrednosti, ali nemaju isto mesto u memoriji.

b = c;
console.log(a === b);

// prenos po referenci ne upisuje se [1, 4, 5, 7] c ukazuje samo na nas niz da su u njemu upisane nase vrednosti(samo ukazuje na adresu objekta, odnosno niza)
//prenos o referenci vazi samo za nizove i objekte. To se radi da bi se smanjila upotreba memorije.

var a = [4, 5, 6];

function print(array) {
  //array ukazuje na niz a
  a.push(56);
  console.log(array);
  return array; // zavisi od toga sta funkcija radi za nas, ako nam treba za dalji rad onda kazemo return result.
}
print(a);

console.log(a);

// kada prosledimo nesto funkciji i ona promeni niz, funkcija to menja trajno.

var point1 = {
  x: 20,
  y: 30
};

("x=20; y=30;");
var point1AsString = JSON.stringify(point1);
console.log(point1AsString);
//string reperzentacija objekta  {"x":20,"y":30}
var point2AsString = JSON.stringify(point2);
console.log(point1AsString === point2AsString);
// JSON objekat prebacuje sta god da mu prosledimo u neku smislenu string prezentaciju.
var point2 = {
  x: 20,
  y: 30
};
var point3 = point1;

console.log(point1 == point2);

// dobijamo false posto objekti imaju razlicite adrese i to je onda false.
console.log(point3 == point1);

point1.x = 40;
point3.z = 50;

console.log(point1);

//kako poredimo dva objekta na osnovu vrednosti njihovih svojstava.

//Funkcija koja dobije objekat ili niz menja taj objekat ili niz trajno.

function extend(obj) {
  obj.description = "super point";
}

var o = {
  x: 0,
  y: 0
};

extend(o);
console.log(o);

// koncept pure function je koncept u kom funkcij ne menja nista sto joj se prosledi i da nema nikakav side efect.
