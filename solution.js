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

// console.log(findMaximumNumber([5, 1, 9, 3]))

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

// console.log(removeDuplicatesNumbers([1, 2, 2, 3, 4, 4]))

// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4]
// Output: 10

// Solution06:

function sumOfAllNumbers(numberArray) {
  let sum = 0
  for (let index = 0; index < numberArray.length; index++) {
    sum = sum + numberArray[index]
  }
  return sum
}
// console.log(sumOfAllNumbers([1, 2, 3, 4]));

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

// Solution07:

function findEvenNumbers(numberArray) {
  let evenNumbersArray = []
  for (let index = 0; index < numberArray.length; index++) {
    if (numberArray[index] % 2 === 0) {
      evenNumbersArray.push(numberArray[index])
    }
  }
  return evenNumbersArray
}

// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.
// Example:
// Input: "hello world"
// Output: "Hello World"

// Solution08:

function capitalizeFirstLetterOfEachWord(inputString) {
  let wordsArray = inputString.split(' ')
  let capitalizedWordsArray = []
  for (let index = 0; index < wordsArray.length; index++) {
    let currentWord = wordsArray[index]
    let capitalizedWord = currentWord[0].toUpperCase() + currentWord.slice(1)
    capitalizedWordsArray.push(capitalizedWord)
  }
  let resultString = capitalizedWordsArray.join(' ')
  return resultString
}
// console.log(capitalizeFirstLetterOfEachWord("hello world"));

// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.
// Example:
// Input: 5
// Output: 120

// Solution09:
function factorialOfNumber(n) {
  let factorial = 1
  for (let index = 1; index <= n; index++) {
    factorial = factorial * index
  }
  return factorial
}
// console.log(factorialOfNumber(5));

// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.
// Example:
// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:
// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

// Solution10:

function pingPongChallenge() {
  for (let number = 1; number <= 20; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('PingPong')
    } else if (number % 3 === 0) {
      console.log('Ping')
    } else if (number % 5 === 0) {
      console.log('Pong')
    } else {
      console.log(number)
    }
  }
}

// console.log(pingPongChallenge())