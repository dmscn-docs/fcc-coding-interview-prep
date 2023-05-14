/*
  Write a function that takes two arrays as parameters and returns the symmetric difference. Sort the resultant array before returning it.
*/

function symmetricDifference(setA, setB) {
  const difference = new Set(setA);

  for (const element of setB) {
    if (difference.has(element)) {
      difference.delete(element);
    } else {
      difference.add(element);
    }
  }

  return [...difference].sort();
}
