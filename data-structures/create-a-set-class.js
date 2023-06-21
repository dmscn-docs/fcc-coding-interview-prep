/*
  Create an add method that adds a unique value to the set collection and
  returns true if the value was successfully added and false otherwise.
  
  Create a remove method that accepts a value and checks if it exists in the set.
  If it does, then this method should remove it from the set collection, and return true. 
  Otherwise, it should return false. Create a size method that returns the size of the set collection.
*/

class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {}
    this.length = 0
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary)
  }

  // Only change code below this line
  add(element) {
    if (this.has(element)) {
      return false
    }

    this.dictionary[element] = element
    this.length++

    return true
  }

  remove(element) {
    this.length--
    return delete this.dictionary[element]
  }

  size() {
    return this.length
  }
  // Only change code above this line
}
