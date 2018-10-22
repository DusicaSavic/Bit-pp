// 9.Write a function that replaces all white spaces with dash (-)
function spaceReplace(string, char) {
    var newString = "";
    var currentChar;
    for (var i = 0; i < string.length; i++) {
        currentChar = string[i];
        if (currentChar == " ") {
            newString += char;
        } else {
            newString += currentChar;
        }
    }
    return newString;
}

var result = spaceReplace("Belgrade Istitute of Tehnology", "-");
console.log(result);