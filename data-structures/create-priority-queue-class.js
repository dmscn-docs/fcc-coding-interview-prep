/*
  You will need to add an enqueue method for adding items with a priority,
  a dequeue method for removing and returning items, a size method to return
  the number of items in the queue, a front method to return the element
  at the front of the queue, and finally an isEmpty method that will return
  true if the queue is empty or false if it is not.

  The enqueue should accept items with the format shown above (['human', 1])
  where 1 represents the priority. dequeue and front should return only
  the item's name, not its priority.
*/

function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (array) {
    if (this.isEmpty()) {
      this.collection.push(array);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (array[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, array);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(array);
      }
    }
  };

  this.dequeue = function () {
    return this.collection.shift()[0];
  };

  this.front = function () {
    return this.collection[0][0];
  };

  this.size = function () {
    return this.collection.length;
  };

  this.isEmpty = function () {
    return this.collection.length === 0;
  };
  // Only change code above this line
}
