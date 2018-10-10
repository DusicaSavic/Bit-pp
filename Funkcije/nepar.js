//broj svih neparnih elemenata u nizu

function counter(a) {

    var n = 0;
    var i;

    for (i = 0; i < a.lenght, i++) {
        if (a[i] % 2 == 1) {
            n++;
        }
    }

    //arguments: [[3, 8, 9, 12, 14, 58]]
    return n;
}

var final_n;
final_n = counter([3, 8, 9, 12, 14, 58])
console.log(final_n);