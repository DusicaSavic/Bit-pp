// ------ ANONIMNA FUNKCIJA-----
var sum;
sum = function (a, b) {
    return a + b;
};

var result = sum(3, 5);
console.log(result);

console.log(typeof sum);


//-------- MOZEMO PROSLEDJIVATI DRUGOJ VARIJABLI KOJA OPET POSTAJE TIPA "FUNCTION"-------
var zbir;
zbir = sum;
console.log(typeof zbir);

