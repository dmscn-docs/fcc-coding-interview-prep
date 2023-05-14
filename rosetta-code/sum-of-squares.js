/*
  Write a function to find the sum of squares of an array of integers.
*/

const sumsq = (array) => {
  return array.reduce((acc, curr) => acc + curr ** 2, 0);
};
