// Algorithms: Inventory Update

// Compare and update the inventory stored in a 2D array against a second
// 2D array of a fresh delivery. Update the current existing inventory 
// item quantities (in arr1). If an item cannot be found, add the new 
// item and quantity into the inventory array. The returned inventory 
// array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  return arr1;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);




function updateInventory(arr1, arr2) {
  let existingItems = arr1.map(item => item[1]);
  let result = [...arr1];
  arr2.forEach((item, index) => {
    if (existingItems.includes(item[1])) {
      result[existingItems.indexOf(item[1])][0] += arr2[index][0];
      arr2.splice(index, 1);
    }
  })
  result = result.concat(arr2);
  // All inventory must be accounted for or you're fired!
  return result;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);