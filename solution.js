// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
// Example:
// Input: "hello"
// Output: "olleh"

// Solution01:
function reverseString(inputString){
  let reverseString = '';
  for (let index = inputString.length - 1; index >= 0; index --){
    reverseString = reversedString + inputString[index];
  }
  return reversedString;
}

