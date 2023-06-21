/*
 In this exercise we are going to perform a union on two sets of data. 
 We will create a method on our Set data structure called union. 
 This method should take another Set as an argument and return the union of the two sets, 
 excluding any duplicate values.
*/

class Set {
  constructor() {
    // This will hold the set
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
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element
      this.length++
      return true
    }

    return false
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element]
      this.length--
      return true
    }

    return false
  }
  // This method will return the size of the set
  size() {
    return this.length
  }
  // Only change code below this line
  union(otherSet) {
    const union = new Set()

    for (const item of this.values()) {
      union.add(item)
    }

    for (const item in otherSet.dictionary) {
      union.add(otherSet.dictionary[item])
    }

    return union
  }
  // Only change code above this line
}
