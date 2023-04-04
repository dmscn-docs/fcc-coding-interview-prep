/*
  Create a function that takes two or more arrays and returns an array of their symmetric difference.
  The returned array must contain only unique values (no duplicates).
*/

function sym(...args) {
  return args.reduce(symTwo);
}

function symTwo(arr1, arr2) {
  const uniqueElements = [...arr1, ...arr2].filter((value) => (
    !arr1.includes(value) || !arr2.includes(value)
  ));

  const diffSym = new Set(uniqueElements);
  
  return [...diffSym].sort((a, b) => a - b);
}

sym([1, 2, 3, 3], [5, 2, 1, 4])
