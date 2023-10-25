// => Solve these questions.

// Problem 1: Write a function to calculate the area of a triangle.

function areaOfTriangle(base, heigth) {
  let result = 0.5 * base * heigth;
  return result;
}
console.log(areaOfTriangle(10, 20));

/*====================================================
======================================================*/

// Problem 2: Write a function to convert degrees to radians.

function degToRed(degree) {
  let radians = degree * (3.1416 / 180);
  return radians;
}
console.log(degToRed(57));

/*====================================================
======================================================*/

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function fact(num) {
  if (num === 0 || num == 1) {
    return 1;
  } else {
    let x = 1;
    for (let i = 2; i <= num; i++) {
      x = x * i;
    }
    return x;
  }
}
console.log(fact(5));

/*====================================================
======================================================*/
// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(a) {
  if (a == 1) {
    return false;
  } else if (a == 2) {
    return true;
  } else {
    for (let p = 2; p < a; a++) {
      if (a % p === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log(isPrime(11));

/*====================================================
======================================================*/

// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

array1 = [1, 2, 3, 4];
array2 = [5, 6, 7];
function mergeArrays(array1, array2) {
  let array = array1.concat(array2);
  return array;
}
console.log(mergeArrays(array1, array2));

/*====================================================
======================================================*/

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2023));

/*====================================================
======================================================*/

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

let b = [1, 2, 55, 6, 4, 8, 2, 4, 6, 55, 6, 6, 6, 6, 7, 7, 7, 7];
function removeDuplicates(b) {
  let c = [...new Set(b)];
  return c;
}
console.log(removeDuplicates(b));

/*====================================================
======================================================*/

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(F) {
  let c = ((F - 32) * 5) / 9;
  return c;
}
console.log(convertToCelsius(98));

/*====================================================
======================================================*/

// Problem 9: Write a function to find the maximum of five numbers.

function max(num1, num2, num3, num4, num5) {
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    return "The maxium value is" + " " + num1;
  } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    return "The maxium value is" + " " + num2;
  }
  if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    return "The maxium value is" + " " + num3;
  }
  if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    return "The maxium value is" + " " + num4;
  } else {
    return "The maxium value is" + " " + num5;
  }
}
console.log(max(0, -7, -8, 9, -10));

/*====================================================
======================================================*/

// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(s) {
  if (s.length % 2 === 0) {
    return "even";
  } else {
    return "Odd";
  }
}
console.log(evenOdd("JavaScript")); //characters=10
console.log(evenOdd("Hello")); //characters=5

/*====================================================
======================================================*/

// => Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

//===============================================================
// 2. What is JavaScript, and what is its primary purpose in web development?

/*
==>JavaScript is a cross-platform, object-oriented programming language/ scripting language.
Praimary purpose of JavaScript in web deveopment is to make web pages interactive. It also used for  create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.
*/
//===============================================================
// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.

/*
==> Var, let and const are use to declaring variable in JavaScript. But there are difference among them ,
    a. We can update the value of var variable and also re-declare it. In let variable we only can update the value bun can't re-declare.In const variables can neither be updated nor re-declared.
    b.  Var and let can be declared without being initialized, const must be initialized during declaration.
    c. Var is a global scope variable on the other hand let & const are block scoped variable.
    d. Var keyword was used in all JavaScript code from 1995 to 2015. let and const keywords were added to JavaScript in 2015.
*/
//===============================================================
// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.
/*
==>Global scope — Global scope contains all of the things defined outside of all code blocks. A code block simply consists of grouped statements inside curly braces ({ }). if statement, loops, function are examples of structure that create a code block. A global variable has global scope. A global variable is accessible from anywhere in the code.
Local Scope — Local scope contains things defined inside code blocks. A local variable has local scope. A local variable is only accessible where it’s declared.
*/
//===============================================================
// 5. What is the difference between "null" and "undefined" in JavaScript?

// In JavaScript, both null and undefined represent the absence of a value.
/*
 ==>   Undefined in JacaScript:
    Undefined is a primitive value that indicates a variable has been declared but not assigned any value.
    It's the default value for uninitialized variables and function parameters.
    When accessing an object property or array element that doesn't exist, it results in undefined.
    Null in JacaScript:
    null is an assignment value that represents the intentional absence of any object value.
    It's often used to indicate that a variable should have no value or to reset a variable.
    Unlike undefined, null is explicitly assigned.
    console.log(undefined == null);  // Output: true
    console.log(undefined === null); // Output: false
    */
