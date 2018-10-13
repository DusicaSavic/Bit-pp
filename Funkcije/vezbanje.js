// Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

function check_elements(e, a) {
    var res = 'nije'
    var i;

    for (i = 0; i < a.length; i++) {

        if (a[i] == e) {

            res = 'yes';
        }
    }
    return res;
}

var test = check_elements(3, [5, -4.2, 4, 7]);
console.log(test)