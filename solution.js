// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
// Example:
// Input: "hello"
// Output: "olleh"

// Solution01:
function reverseString(inputString){
  let reverseString = '';
  for (let index = inputString.length - 1; index >= 0; index --){
    reverseString = reverseString + inputString[index];
  }
  return reverseString;
}
// console.log(reverseString("hello"));

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
// Example:
// Input: "programming"
// Output: 3

// Solution02:
function countVowels(inputString){
  let vowelCount = 0;
  let vowels = 'aeiou';
  for (let index = 0; index < inputString.length; index ++){
    let currentLetter = inputString[index].toLowerCase();
    if(
      currentLetter === 'a' ||
      currentLetter === 'e' ||
      currentLetter === 'i' ||
      currentLetter === 'o' ||
      currentLetter === 'u'
    ){
      vowelCount = vowelCount + 1;
    }
  }
  return vowelCount;
}
// console.log(countVowels("programmingHero"));

// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).
// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

// Solution03:

function isPalindrome(inputString){
  let reversedString = '';
  for (let index = inputString.length - 1; index >= 0; index --){
    reversedString = reversedString + inputString[index];
  }
  if(inputString === reversedString){
    return true;
  }else{
    return false;
  }
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
