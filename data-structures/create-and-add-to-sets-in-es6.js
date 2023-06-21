/*
  For this exercise, return a set with the following values: 
  1, 2, 3, 'Taco', 'Cat', 'Awesome'
*/

function checkSet() {
  let set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1])
  // Only change code below this line
  set.add("Taco")
  set.add("Cat")
  set.add("Awesome")
  // Only change code above this line
  console.log(Array.from(set))
  return set
}

checkSet()
