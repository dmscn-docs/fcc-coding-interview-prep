/*
  Write a program that generates an array of integers from 1 to 100 (inclusive). But:

  - for multiples of 3, add "Fizz" to the array instead of the number
  - for multiples of 5, add "Buzz" to the array instead of the number
  - for multiples of 3 and 5, add "FizzBuzz" to the array instead of the number

  Your program should return an array containing the results based on the rules above.
*/

function fizzBuzz() {
  const arrIntegers = [];

  for (let int = 1; int <= 100; int++) {
    if (int % 3 === 0 && int % 5 === 0) {
      arrIntegers.push("FizzBuzz");
    } else if (int % 3 === 0) {
      arrIntegers.push("Fizz");
    } else if (int % 5 === 0) {
      arrIntegers.push("Buzz");
    } else {
      arrIntegers.push(int);
    }
  }

  return arrIntegers;
}
