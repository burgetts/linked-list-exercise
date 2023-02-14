/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
    this.length = vals.length
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if (!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if (!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      const secondNode = this.head
      this.head = newNode
      this.head.next = secondNode
    }
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0){
        throw Error
    } 
    else if (this.length === 1){
      const tailVal = this.head.val
      this.head = null
      this.tail = null
      this.length--
      return tailVal
    } else {
      const tailVal = this.tail.val
      let currentNode = this.head
      // while not on tail node
      while (currentNode.next !== null) { 
        // if next node is tail, 
        if (currentNode.next === this.tail){
          this.tail = currentNode
        }
        currentNode = currentNode.next
      }
      this.length--
      return tailVal
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0){
      throw Error
    } else  if (this.length === 1) {
      const headValue = this.head.val
      this.head = null
      this.tail = null
      this.length--
      return headValue
    } else {
      const headValue = this.head.val
      this.head = this.head.next
      this.length--
      return headValue
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head
    let count = 0
    while (currentNode) {
      if (count === idx){
        return currentNode.val
      }
      currentNode = currentNode.next
      count++
    }
    throw Error
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head
    let count = 0
    while (currentNode) {
      if (count === idx){
        currentNode.val = val
        return
      }
      currentNode = currentNode.next
      count++
    }
    throw Error
  }

  /** insertAt(idx, val): add node w/val AT idx. */

  insertAt(idx, val) {
    let currentNode = this.head
    let count = 0
    let newNode = new Node(val)
    // if empty list
    if (this.length === 0){
      this.head = newNode
      this.tail = newNode
      this.length++
      return undefined
    } // if insertion is at head
    else if (idx === 0) {
      newNode.next = this.head
      this.head = newNode
      this.length++
      return undefined
    } 
    // if insertion is at tail
    else if (idx === this.length){
      this.tail.next = newNode
      this.tail = newNode
      this.length++
      return undefined
    }
    // if insertion is in middle
    while (currentNode) {
      if (count === idx-1) { 
        let newNodeNext = currentNode.next
        newNode.next = newNodeNext
        currentNode.next = newNode
        this.length++
        return undefined
      }
      currentNode = currentNode.next
      count++
    }
    throw Error
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head
    let count = 0
    if (idx === 0){
      let removedVal = this.head.val
      this.head = this.head.next
      if (this.length === 1){
        this.tail = null
      }
      this.length--
      return removedVal
    }
    while (currentNode){
      if (count === idx-1) {
        let removedVal = currentNode.next.val
        idx === this.length ? currentNode.next = currentNode.next.next : this.tail = currentNode
        this.length--
        return removedVal
      }
      currentNode = currentNode.next
      count++
    }
    throw error
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head
    let count = 0;
    let sum = 0;

    if (this.length === 0){
      return 0
    }
    
    while (currentNode) {
      sum += currentNode.val
      count++

      currentNode = currentNode.next
    }
    return sum / count
  }
}

module.exports = LinkedList;
