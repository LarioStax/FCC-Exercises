// Data Structures: Learn how a Stack Works

// You are probably familiar with stack of books on your table. You have likely used the undo 
// feature of a text editor. You are also probably used to hitting the back button on your 
// phone to go back to the previous view in your app.

// You know what they all have in common? They all store the data in a way so that you can 
// traverse backwards.

// The topmost book in the stack was the one that was put there last. If you remove that 
// book from your stack's top, you would expose the book that was put there before the last 
// book and so on.

// If you think about it, in all the above examples, you are getting Last-In-First-Out type 
// of service. We will try to mimic this with our code.

// This data storage scheme is called a Stack. In particular, we would have to implement the 
// push() method that pushes JavaScript objects at the top of the stack; and pop() method,
// that removes the JavaScript object that's at the top of the stack at the current moment.




// Here we have a stack of homework assignments represented as an array: "BIO12" is at the 
// base, and "PSY44" is at the top of the stack.

// Modify the given array and treat it like a stack using the JavaScript methods mentioned 
// above. Remove the top element "PSY44" from the stack. Then add "CS50" to be the new top
// element of the stack.

var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line


var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line

homeworkStack.pop();
homeworkStack.push("CS50");



// Data Structures: Create a Stack Class

// In the last section, we talked about what a stack is and how we can use an array to 
// represent a stack. In this section, we will be creating our own stack class. Although you 
// can use arrays to create stacks, sometimes it is best to limit the amount of control we 
// have with our stacks. Apart from the push and pop method, stacks have other useful methods. 
// Let's add a peek, isEmpty, and clear method to our stack class.

// Write a push method that pushes an element to the top of the stack, a pop method that removes 
// and returns the element on the top of the stack, a peek method that looks at the top element 
// in the stack, an isEmpty method that checks if the stack is empty, and a clear method that 
// removes all elements from the stack. Normally stacks don't have this, but we've added a print 
// helper method that console logs the collection.

function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
}


function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(input) {
    collection = [...collection, input];
  }
  this.pop = function() {
    return collection.splice(-1, 1); //fcc test won't accept this, not sure why
    // return collection.pop();
  }
  // Only change code above this line
  this.peek = function() {
    return collection[collection.length-1];
  }
  this.isEmpty = function() {
    if (collection.length < 1) {
      return true;
    } else {
      return false;
    }
  }
  this.clear = function() {
    collection = [];
  }
}