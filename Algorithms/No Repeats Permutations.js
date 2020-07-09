// Algorithms: No Repeats Please

// Return the number of total permutations of the provided string that 
// don't have repeated consecutive letters. Assume that all characters 
// in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations 
// (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) 
// don't have the same letter (in this case a) repeating.

function permAlone(str) {
  return str;
}

permAlone('aab');


function generate(k, arr) {
  if (k == 1) {
    return arr;
  } else {
    for (let i = 0; i < k; i++) {
      if (k % 2 == 0) {
        swap(arr, i, i - 1)
      } else {
        swap(arr, 0, i - 1);
      }
      generate(k - 1, arr);
    }
  }
}

function swap(arr, idxA, idxB) {
  let temp = arr[idxA];
  arr[idxA] = arr[idxB];
  arr[idxB] = temp;
}





function permAlone(str) {
  //Make an array from string
  let strArr = [...str];
  let permutations = [];
  console.log(strArr)

  generate(strArr.length, strArr);

  //Heap algorithm - lots of googling
  function generate(k, arr) {
    if (k == 1) {
      permutations.push(arr.join(""));
      return;
    } else {
      for (let i = 0; i < k; i++) {
        //Not 100% sure I understand this part
        generate(k - 1, arr);
        if (k % 2 == 0) {
          swap(arr, i, k - 1)
        } else {
          swap(arr, 0, k - 1);
        }
      }
    }
  }

  function swap(arr, idxA, idxB) {
    let temp = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = temp;
  }

  //Check for any character appearing twice in a row and filter them out
  let regex = /(.)\1/
  let results = permutations.filter(item => !item.match(regex));
  return results.length;

}


permAlone('aab');