// Data Structures: Create a Queue Class

// Like stacks, queues are a collection of elements. But unlike stacks, queues follow the 
// FIFO (First-In First-Out) principle. Elements added to a queue are pushed to the tail, 
// or the end, of the queue, and only the element at the front of the queue is allowed to 
// be removed.

// We could use an array to represent a queue, but just like stacks, we want to limit the 
// amount of control we have over our queues.

// The two main methods of a queue class is the enqueue and the dequeue method. The enqueue 
// method pushes an element to the tail of the queue, and the dequeue method removes and 
// returns the element at the front of the queue. Other useful methods are the front, size, 
// and isEmpty methods.



// Write an enqueue method that pushes an element to the tail of the queue, a dequeue method 
// that removes and returns the front element, a front method that lets us see the front 
// element, a size method that shows the length, and an isEmpty method to check if the queue 
// is empty.


function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
}

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = function(input) {
    collection = [...collection, input];
  };
  this.dequeue = function() {
    //return collection.splice(0, 1);
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  }
  this.size = function() {
    return collection.length;
  }
  this.isEmpty = function() {
    if (collection.length < 1 ) {
      return true;
    } else {
      return false;
    }
  }
  // Only change code above this line
}


// Data Structures: Create a Priority Queue Class

// In this challenge you will be creating a Priority Queue. A Priority Queue is a special 
// type of Queue in which items may have additional information which specifies their 
// priority. This could be simply represented with an integer. Item priority will override 
// placement order in determining the sequence items are dequeued. If an item with a higher 
// priority is enqueued after items with lower priority, the higher priority item will be 
// dequeued before all the others.

// For instance, let’s imagine we have a priority queue with three items:

// [['kitten', 2], ['dog', 2], ['rabbit', 2]]

// Here the second value (an integer) represents item priority. If we enqueue ['human', 1] 
// with a priority of 1 (assuming lower priorities are given precedence) it would then be 
// the first item to be dequeued. The collection would look like this:

// [['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]].

// We’ve started writing a PriorityQueue in the code editor. You will need to add an enqueue 
// method for adding items with a priority, a dequeue method for removing items, a size method 
// to return the number of items in the queue, a front method to return the element at the 
// front of the queue, and finally an isEmpty method that will return true if the queue is 
// empty or false if it is not.

// The enqueue should accept items with the format shown above (['human', 1]) where 1 represents 
// the priority. The dequeue should return only the current item, not its priority.


function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line

  // Only change code above this line
}
