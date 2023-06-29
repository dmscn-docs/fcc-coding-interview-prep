/*
  Given an array arr, find element pairs whose sum equal the second argument arg
  and return the sum of their indices.
*/

function pairwise(arr, arg) {
  const indexes = new Set()

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg) {
        indexes.add(i)
        indexes.add(arr.indexOf(arr[j]))
      }
    }
  }

  return [...indexes].reduce((acc, curr) => acc + curr, 0)
}

pairwise([1, 4, 2, 3, 0, 5], 7)
