// 6.Write a function that reverses a word or sentence. Cover cases if sentence is not provided
function reverseString(string) {
    var reverseString = "";
    if (string == undefined) {
        return "No sentence is provided!";
    } else {
        for (var i = string.length - 1; i >= 0; i--) {
            reverseString += string[i];
        }
        return reverseString;
    }
}

console.log(reverseString("Belgrade Isntitute of Tehnology"));