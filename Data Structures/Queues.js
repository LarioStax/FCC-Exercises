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
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
}

function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = function (input) {
    collection = [...collection, input];
  };
  this.dequeue = function () {
    //return collection.splice(0, 1);
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  }
  this.size = function () {
    return collection.length;
  }
  this.isEmpty = function () {
    if (collection.length < 1) {
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


function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line

  // Only change code above this line
}


function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (input) {
    let inputPriority = input[1];
    let correctIndex;
    this.collection.forEach( function (element, index) {
      if (element[1] <= inputPriority) {
        correctIndex = index+1;
      }
    })
    this.collection.splice(correctIndex, 0, input);
  }
  this.dequeue = function () {
    if (this.collection.length === 0) {
      return console.log("Empty array!");
    } else {
      return this.collection.shift()[0];
    }
  }
  this.front = function () {
    return collection[0];
  }
  this.size = function () {
    return this.collection.length;
  }
  this.isEmpty = function () {
    return this.collection.length === 0;
  }
  // Only change code above this line
}

// Data Structures: Create a Circular Queue

// In this challenge you will be creating a Circular Queue. A circular queue is a queue that 
// writes to the end of a collection then begins overwriting itself at the beginning of the 
// collection. This type of data structure is useful in certain situations. For example, a 
// circular queue can be used for streaming media. Once the queue is full, new media data 
// will overwrite old data.

// A good way to illustrate this concept is with an array of length 5:

// [null, null, null, null, null]
//  ^Read @ 0
//  ^Write @ 0

// Here the read and write are both at position 0. Now the queue gets 3 new records a, b, 
// and c. Our queue now looks like:

// [a, b, c, null, null]
//  ^Read @ 0
//           ^Write @ 3

// As the read head reads, it can remove values or keep them:

// [null, null, null, null, null]
//                    ^Read @ 3
//                    ^Write @ 3

// Now we write the values d, e, and f to the queue. Once the write reaches the end of the 
// array it loops back to the beginning:

// [f, null, null, d, e]
//                 ^Read @ 3
//     ^Write @ 1

// This approach requires a constant amount of memory but allows files of a much larger 
// size to be processed.

// In this challenge we will implement a circular queue. The circular queue should provide 
// enqueue and dequeue methods which allow you to read from and write to the queue. The 
// class itself should also accept an integer argument which you can use to specify the 
// size of the queue when created. We've written the starting version of this class for 
// you in the code editor. When you enqueue items to the queue, the write pointer should 
// advance forward and loop back to the beginning once it reaches the end of the queue. 
// Likewise, the read pointer should advance forward as you dequeue items. The write 
// pointer should not be allowed to move past the read pointer (our class won't let you 
// overwrite data you haven't read yet) and the read pointer should not be able to advance 
// past data you have written. In addition, the enqueue method should return the item you 
// enqueued if it is successful; otherwise it will return null. Similarly, when you dequeue 
// an item, that item should be returned and if you cannot dequeue an item you should return 
// null.

class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line

    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line

    // Only change code above this line
  }
}
