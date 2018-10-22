// 3.Write a function that outputs array of every second character from the provided string. In case that string is not provided outputs array empty array.
function everySecondChar(string) {
    var evenChars = [];
    if (string == undefined) {
        return evenChars;
    } else {
        j = 0;
        for (var i = 0; i < string.length; i++) {
            var character = string[i];
            if (i % 2 == 0) {
                evenChars[j] = character;
                j++;
            }
        }
        return evenChars;
    }
}

console.log(everySecondChar("Belgrade Isntitute of Tehnology"));
