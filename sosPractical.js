// Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false

function checkDigit(string, number) {
  var result;
  for (i = 0; i < string.length; i++) {
    if (string[i] == number) {
      return true;
    }
  }
  return false;
}

console.log(checkDigit("1bser9re", 9));

// Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

function replacesAppearance(string) {
  var newString = "";

  for (i = 0; i < string.length; i++) {
    if (string[i] === "J") {
      newString += "*";

      continue;
    }
    if (string[i] === "S") {
      newString += "*";

      continue;
    }
    newString += string[i];
  }
  return newString;
}

console.log(replacesAppearance("Programming in JS is super interesting!"));

// Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”

function str(string, number, letter) {
  var newString = "";
  for (i = 0; i < string.length; i++) {
    if (i == number - 1) {
      newString += letter;
    }
    newString += string[i];
  }
  return newString;
}
console.log(str("Goo morning", 4, "d"));

// Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”

function str(string, number) {
  var newString = "";
  for (i = 0; i < string.length; i++) {
    if (i !== number) {
      newString += string[i];
    }
  }
  return newString;
}
console.log(str("Goodd morning", 3));

// Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

function deleteSecondElement(array) {
  var newArray = [];
  var index = 0;
  for (var i = 0; i < array.length; i = i + 2) {
    newArray[index] = array[i];
    index++;
    // newArray.push(array[i]);
  }

  return newArray;
}

console.log(deleteSecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67]));

// Write a function that replaces the elements of the given array
// between two positions with their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

function squareBetweenElements(array, position1, position2) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (i >= position1 && i <= position2) {
      newArray[i] = 2 * array[i];
    } else {
      newArray[i] = array[i];
    }
  }
  return newArray;
}

console.log(squareBetweenElements([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

// Write a function that checks if a given object has a given property with the given value.
// Input: {x: 20, y: 30}, “x”, 20
// Output: true

// Input: {x: 20, y: 30}, “z”, 20
// Output: false

// Input: {x: 20, y: 30}, “x”, 10
// Output: false

var o = { x: 20, y: 30 };

function check(object, propertyName, value) {
  if (object.hasOwnProperty(propertyName) == true) {
    var propertyValue;
    propertyValue = object[propertyName];
    if (propertyValue == value) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

var result;
result = check(o, "x", 30);
console.log(result);

// Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

// Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

// Write a function that prints out the date of the next day.
// Output:  25. 10. 2018.

// Write a function that prints out the date of the previous day.
// Output:  23. 10. 2018.

// Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output:
//   78
//  	 111
//     	    4
//                       4321
