/*
  Return the number of total permutations of the provided string that don't have
  repeated consecutive letters. Assume that all characters in the provided string are each unique.
*/

function permAlone(str) {
  const regex = /(.)\1/;

  function numberNonConsecutivePerm(permutationList, string) {
    if (string.length) {
      let sum = 0;

      for (let i = 0; i < permutationList.length + 1; i++) {
        sum += numberNonConsecutivePerm(
          permutationList
            .slice(0, i)
            .concat(string[0])
            .concat(permutationList.slice(i)),
          string.slice(1)
        );
      }

      return sum;
    } else return !regex.test(permutationList.join(""));
  }

  return numberNonConsecutivePerm([], str.split(""));
}
