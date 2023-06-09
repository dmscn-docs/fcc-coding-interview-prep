/*
  Compare and update the inventory stored in a 2D array against a second 2D
  array of a fresh delivery. Update the current existing inventory item 
  quantities (in arr1). If an item cannot be found, add the new item and 
  quantity into the inventory array. The returned inventory array should be in 
  alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
  const inventory = new Map(arr1.map(([quantity, item]) => [item, quantity]));

  for (const [quantity, item] of arr2) {
    const currentValue = inventory.get(item) ?? 0;
    inventory.set(item, currentValue + quantity);
  }

  const sortAlphabetical = (item1, item2) => item1[0].localeCompare(item2[0]);

  return [...inventory].sort(sortAlphabetical).map(([item, quantity]) => [quantity, item]);
}

// Example inventory lists
const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);