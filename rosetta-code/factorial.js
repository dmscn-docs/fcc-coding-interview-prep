/*
  Write a function to return the factorial of a number.
*/

function factorial(n) {
  let factor = 1;

  for (let i = n; i > 1; i--) {
    factor *= i;
  }

  return factor;
}
