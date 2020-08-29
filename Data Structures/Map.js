// Data Structures: Create a Map Data Structure

// The next few challenges will cover maps and hash tables. Maps are data structures 
// that store key-value pairs. In JavaScript, these are available to us as objects. 
// Maps provide rapid lookup of stored items based on key values and are very common 
// and useful data structures.

// Let's get some practice creating our own map. Because JavaScript objects provide 
// a much more efficient map structure than anything we could write here, this is 
// intended primarily as a learning exercise. However, JavaScript objects only provide 
// us with certain operations. What if we wanted to define custom operations? Use the 
// Map object provided here as a wrapper around a JavaScript object. Create the 
// following methods and operations on the Map object:

//     add accepts a key, value pair to add to the map.
//     remove accepts a key and removes the associated key, value pair
//     get accepts a key and returns the stored value
//     has accepts a key and returns true if the key exists or false if it doesn't.
//     values returns an array of all the values in the map
//     size returns the number of items in the map
//     clear empties the map


var Map = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

var Map = function() {
  this.collection = {};
  // change code below this line
  this.add = function(key, value) {
    this.collection[key] = value;
  }
  this.remove = function(key) {
    delete this.collection[key];
  }
  this.get = function(key) {
    return this.collection[key];
  }
  this.has = function(key, value) {
    return this.collection[key];
  }
  this.values = function() {
    return Object.values(this.collection);
  }
  this.size = function() {
    return this.values().length
  }
  this.clear = function() {
    this.collection = {};
  }

  // change code above this line
};

// Data Structures: Create an ES6 JavaScript Map

// The new version of JavaScript provides us with a built-in Map object which provides 
// much of the functionality we wrote by hand in the last challenge. This Map object, 
// although similar to regular JavaScript objects, provides some useful functionality 
// that normal objects lack. For example, an ES6 Map tracks the insertion order of items 
// that are added to it. Here is a more complete overview of its methods: .has(key) 
// returns true or false based on the presence of a key .get(key) returns the value 
// associated with a key .set(key, value) sets a new key, value pair .delete(key) 
// removes a key, value pair .clear() removes all key, value pairs .entries() returns an 
// array of all the keys in insertion order .values() returns an array of all the values 
// in insertion order

// Define a JavaScript Map object and assign to it a variable called myMap. Add the key, 
// value pair freeCodeCamp, Awesome! to it.

// change code below this line


// change code below this line
const myMap = new Map();
myMap.set("freeCodeCamp", "Awesome!")