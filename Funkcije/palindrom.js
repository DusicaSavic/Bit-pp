//da li je vrednost palindrom

var s = 'anavolimilovana';
var i;
var j;
var pal = true;

for (i = 0, j = s.length - 1; i < j; i++ , j--) {

    if (s[i] != s[j]) {
        pal = false;
        break;
    }
}

if (pal == true) {
    console.log('String is pal');
} else {
    console.log('String is not pal')
}


var a = 'javascript';

var i;
var s = '';

for (i = a.length - 1; i >= 0; i--) {


    s = s + a[i];

} console.log(s);