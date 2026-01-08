// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
// Example:
// Input: "hello"
// Output: "olleh"

// Solution01:
function reverseString(inputString) {
  let reverseString = ''
  for (let index = inputString.length - 1; index >= 0; index--) {
    reverseString = reverseString + inputString[index]
  }
  return reverseString
}
// console.log(reverseString("hello"));

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
// Example:
// Input: "programming"
// Output: 3

// Solution02:
function countVowels(inputString) {
  let vowelCount = 0
  let vowels = 'aeiou'
  for (let index = 0; index < inputString.length; index++) {
    let currentLetter = inputString[index].toLowerCase()
    if (
      currentLetter === 'a' ||
      currentLetter === 'e' ||
      currentLetter === 'i' ||
      currentLetter === 'o' ||
      currentLetter === 'u'
    ) {
      vowelCount = vowelCount + 1
    }
  }
  return vowelCount
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

function isPalindrome(inputString) {
  let reversedString = ''
  for (let index = inputString.length - 1; index >= 0; index--) {
    reversedString = reversedString + inputString[index]
  }
  if (inputString === reversedString) {
    return true
  } else {
    return false
  }
}
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.
// Example:
// Input: [5, 1, 9, 3]
// Output: 9

// Solution04:
function findMaximumNumber(numberArray) {
  let maximumNumber = numberArray[0]
  for (let index = 1; index < numberArray.length; index++) {
    if (numberArray[index] > maximumNumber) {
      maximumNumber = numberArray[index]
    }
  }
  return maximumNumber
}
console.log(findMaximumNumber([5, 1, 9, 3]))

// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.
// Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

// Solution05:
function removeDuplicatesNumbers(numberArray) {
  let newArray = []
  for (let index = 0; index < numberArray.length; index++) {
    let isAlreadyInArray = false
    for (let j = 0; j < newArray.length; j++) {
      if (numberArray[index] === newArray[j]) {
        isAlreadyInArray = true
      }
    }
    if (isAlreadyInArray === false) {
      newArray.push(numberArray[index])
    }
  }
  return newArray
}

console.log(removeDuplicatesNumbers([1, 2, 2, 3, 4, 4]))
