//1.koji je veci broj

function max_num(a, b) {
    var result;
    if (a > b) {
        result = a;
    } else {
        result = b;
    }
    return result;


}

var res = max_num(10, 6);

console.log(res)


//2.sortiranje brojeva po vrednosti

function sort(a, b, c) {
    var result;

    if (a > b && a > c) {
        if (b > c) {
            console.log(a, b, c);
        } else {
            console.log(a, c, b)
        }
    }
    if (b > a && b > c) {

        if (c > a) {
            console.log(b, c, a);
        } else {
            console.log(b, a, c)
        }
    }
    if (c > a && c > b) {
        if (b > a) {
            console.log(c, b, a);
        } else {
            console.log(c, a, b);
        }

    }
}

sort(0, -1, -4);


//3.Write a program that checks if a given number is odd.

function odd_num(a, b, c) {

    var result;

    if ((a % 2 == 0) && (b % 2 == 0) && (c % 2 == 0)) {
        //console.log(a, b, c);
        result = true;
    }
    else {
        result = false;
    }

    return result;
}

var res;
res = odd_num(8, 6, 4);
console.log(res);

//4.Write a program that checks if a given number is a three digit long number.

function long_num(a) {

    var result;
    a = a + '';

    if (a.length == 3) {

        result = true;

    } else {
        result = false;
    }

    return result;
}

var res;
res = long_num(5553);
console.log(res)
