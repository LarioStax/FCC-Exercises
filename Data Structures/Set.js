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