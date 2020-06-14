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



//Version 1 - Doesn't sort the result alphabetically

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


updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ]
)

[
  [88, "Bowling Ball"],
  [2, "Dirty Sock"],
  [3, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [5, "Microphone"],
  [7, "Toothpaste"]
]



// Version 2 - Sorts the result alphabetically!

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
  result.sort(
    function (a, b) {
      if (a[1] < b[1]) { return -1; }
      if (a[1] > b[1]) { return 1; }
      return 0;
    })
  console.log(result);
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



//Beautiful solution from someone else
function updateInventory(arr1, arr2) {
  for (let [quantity, name] of arr2) {
    const index = getItemIndex(arr1, name);
    if (index === -1) {
      arr1.push([quantity, name]);
    } else {
      arr1[index][0] += quantity;
    }
  }
  return arr1.sort(([q1, n1], [q2, n2]) => n1.localeCompare(n2));
}

var getItemIndex = function (arr1, name) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i][1] === name) {
      return i;
    }
  }
  return -1;
};
