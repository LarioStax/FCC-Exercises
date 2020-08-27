// Data Structures: Create a Set Class

// In this exercise we are going to create a class named Set to emulate an abstract data structure 
// called "set". A set is like an array, but it cannot contain duplicate values. The typical use 
// for a set is to simply check for the presence of an item. We can see how the ES6 Set object 
// works in the example below:

// const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
// console.log(set1);
// // output: {1, 2, 3, 5, 0}
// console.log(set1.has(1));
// // output: true
// console.log(set1.has(6));
// // output: false

// First, we will create an add method that adds a value to our set collection as long as the value 
// does not already exist in the set. Then we will create a remove method that removes a value from 
// the set collection if it already exists. And finally, we will create a size method that returns 
// the number of elements inside the set collection.

// Create an add method that adds a unique value to the set collection and returns true if the value 
// was successfully added and false otherwise.

// Create a remove method that accepts a value and checks if it exists in the set. If it does, then 
// this method should remove it from the set collection, and return true. Otherwise, it should return 
// false. Create a size method that returns the size of the set collection.
 
 

class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set as an array
  values() {
    return Object.keys(this.dictionary);
  }

  // change code below this line

  // write your add method here

  // write your remove method here

  // write your size method here

  // change code above this line
}



class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set as an array
  values() {
    return Object.keys(this.dictionary);
  }

  // change code below this line

  // write your add method here
  add(item) {
    if (this.has(item)) {
      return false;
    } else {
      this.dictionary[item] = true;
      return true;
    }
  }
  // write your remove method here
  remove(item) {
    if (this.has(item)) {
      delete this.dictionary[item]
    }
  }
  // write your size method here
  size() {
    return this.values().length;
  }
  // change code above this line
}




// Data Structures: Perform a Union on Two Sets

// In this exercise we are going to perform a union on two sets of data. We will 
// create a method on our Set data structure called union. This method should take 
// another Set as an argument and return the union of the two sets, excluding any 
// duplicate values.

// For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the union 
// of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e'].


class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // change code below this line

  // change code above this line
}



class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // change code below this line
  union(newSet) {
    let unionSet = new Set();
    console.log(this);
    let firstValues = this.values();
    let secondValues = newSet.values();
    firstValues.forEach(val => unionSet.add(val));
    secondValues.forEach(val => unionSet.add(val));
    return unionSet;
  }
  // change code above this line
};


// Data Structures: Perform an Intersection on Two Sets of Data

// In this exercise we are going to perform an intersection on 2 sets of data. We will 
// create a method on our Set data structure called intersection. An intersection of 
// sets represents all values that are common to two or more sets. This method should 
// take another Set as an argument and return the intersection of the two sets.

// For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the 
// intersection of setA and setB is: setA.intersection(setB) = ['a', 'b'].

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method from that lesson
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // change code below this line
  // change code above this line
}


class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method from that lesson
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // change code below this line
  intersection(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      if (set.has(value)) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // change code above this line
}


// Data Structures: Perform a Difference on Two Sets of Data

// In this exercise we are going to perform a difference on 2 sets of data. We will 
// create a method on our Set data structure called difference. A difference of sets 
// should compare two sets and return the items present in the first set that are 
// absent in the second. This method should take another Set as an argument and return 
// the difference of the two sets.

// For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the difference 
// of setA and setB is: setA.difference(setB) = ['c'].

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method from that lesson
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // This is our intersection method from that lesson
  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // change code below this line
  
  // change code above this line
}


class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method from that lesson
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // This is our intersection method from that lesson
  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // change code below this line
  difference(set) {
    const newSet = new Set();

    this.values().forEach(value => {
      if (set.has(value) == false) {
        newSet.add(value);
      }
    })
    return newSet;
  }
  // change code above this line
}
 

// Data Structures: Perform a Subset Check on Two Sets of Data

// In this exercise, we are going to perform a subset test on 2 sets of data. We will create
//  a method on our Set data structure called isSubsetOf. This will compare the first set 
//  against the second, and if the first set is fully contained within the second, it will 
//  return true.

// For example, if setA = ['a','b'] and setB = ['a','b','c','d'], then setA is a subset of 
// setB, so setA.isSubsetOf(setB) should return true.

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method from that lesson
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // This is our intersection method from that lesson
  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // This is our difference method from that lesson
  difference(set) {
    const newSet = new Set();

    this.values().forEach(value => {
      if (!set.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // change code below this line
  isSubsetOf(set) {
    return this.values().every(value => {
        return set.has(value);
      })
  }
  // change code above this line
}


// Data Structures: Create and Add to Sets in ES6

// Now that you have worked through ES5, you are going to perform something similar in ES6. 
// This will be considerably easier. ES6 contains a built-in data structure Set so many of 
// the operations you wrote by hand are now included for you. Let's take a look:

// To create a new empty set:

// var set = new Set();

// You can create a set with a value:

// var set = new Set(1);

// You can create a set with an array:

// var set = new Set([1, 2, 3]);

// Once you have created a set, you can add the values you wish using the add method:

// var set = new Set([1, 2, 3]);
// set.add([4, 5, 6]);

// As a reminder, a set is a data structure that cannot contain duplicate values:

// var set = new Set([1, 2, 3, 1, 2, 3]);
// // set contains [1, 2, 3] only

// For this exercise, return a set with the following values: 1, 2, 3, 'Taco', 'Cat', 'Awesome'

function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line

  // change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();

function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line
  set.add("Taco").add("Cat").add("Awesome");
  // change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();


// Data Structures: Remove items from a set in ES6

// Let's practice removing items from an ES6 Set using the delete method.

// First, create an ES6 Set:

// var set = new Set([1,2,3]);

// Now remove an item from your Set with the delete method.

// set.delete(1);
// console.log([...set]) // should return [ 2, 3 ]

// Now, create a set with the integers 1, 2, 3, 4, & 5.

// Remove the values 2 and 5, and then return the set.

function checkSet(){
  var set = //Create a set with values 1, 2, 3, 4, & 5
  //Remove the value 2
  //Remove the value 5
  //Return the set
  return set;
}
 

function checkSet(){
  var set = new Set([1,2,3,4,5]);
  set.delete(2);
  set.delete(5);
  //Remove the value 2
  //Remove the value 5
  //Return the set
  return set;
}


// Data Structures: Use .has and .size on an ES6 Set

// Let's look at the .has and .size methods available on the ES6 Set object.

// First, create an ES6 Set

// var set = new Set([1,2,3]);

// The .has method will check if the value is contained within the set.

// var hasTwo = set.has(2);

// The .size method will return an integer representing the size of the Set

// var howBig = set.size;


// In this exercise we will pass an array and a value to the checkSet() function. Your function 
// should create an ES6 set from the array argument. Find if the set contains the value argument. 
// Find the size of the set. And return those two values in an array.

function checkSet(arrToBeSet, checkValue){

  // change code below this line

  // change code above this line

}

checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]
