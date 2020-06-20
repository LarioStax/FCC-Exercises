// Algorithms: Pairwise

// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the 
// lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. 
// For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. 
// We can then write out the array with their indices and values.

// Index	0	1	2	3	4
// Value	7	9	11	13	15

// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);


function pairwise(arr, arg) {
  let arrCopy = [...arr];
  let result = 0;
  //find correct number Pair
  //if it exists in the array and is not the same number
  //add indices of both of them to the result
  //set them all to undefined to prevent them being used again
  arrCopy.forEach( (num, index) => {
    let numPair = arg - num;
    if (arrCopy.indexOf(numPair) !== -1 && arrCopy.indexOf(numPair) !== index) {
      result += arrCopy.indexOf(numPair);
      result += index;
      arrCopy[arrCopy.indexOf(numPair)] = undefined;
      arrCopy[index] = undefined;
    }
  })
  console.log(result);
  return result;
}
