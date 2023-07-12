/*
  In this exercise, we are going to perform a subset test on 2 sets of data. 
  We will create a method on our Set data structure called isSubsetOf. 
  This will compare the first set against the second, and if the first
  set is fully contained within the second, it will return true.
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
    return Object.keys(this.dictionary)
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true
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
  // This is our union method
  union(set) {
    const newSet = new Set()
    this.values().forEach((value) => {
      newSet.add(value)
    })
    set.values().forEach((value) => {
      newSet.add(value)
    })

    return newSet
  }
  // This is our intersection method
  intersection(set) {
    const newSet = new Set()

    for (const item of set.values()) {
      if (this.values().includes(item)) {
        newSet.add(item)
      }
    }

    return newSet
  }
  // This is our difference method
  difference(set) {
    const newSet = new Set()

    for (const item of this.values()) {
      if (!set.values().includes(item)) {
        newSet.add(item)
      }
    }

    return newSet
  }

  // Only change code below this line
  isSubsetOf(set) {
    for (const item of this.values()) {
      if (!set.values().includes(item)) {
        return false
      }
    }

    return true
  }
  // Only change code above this line
}