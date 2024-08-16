class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  addNodeAtFirst(data) {
    const newNode = new Node(data)
    newNode.next = null
    //if there ar elements in the list
    if (this.head != null) {
      let oldNode = this.head
      newNode.next = oldNode
    }
    this.head = newNode
    this.size += 1
  }

  addNodeAtGivenIndex(data, index) {
    let newNode = new Node(data)
    if (index == 0) {
      if (this.size > 0) {
        const oldNode = this.head
        newNode.next = oldNode
      }
      this.head = newNode
      this.size += 1
    } else {
      if (index > this.size) {
        console.log("Please insert valid index")
        return
      } else {
        let node = this.head
        let id = 0
        while (id < index - 1) {
          node = node.next
          id += 1
        }
        /*   console.log(node) */
        newNode.next = node.next
        node.next = newNode
        this.size += 1
      }
    }
  }

  removeFromIndex(index) {
    if (index < 0 || index > this.size) {
      console.log("Please insert valid index")
      return
    }
    if (index == 0 && this.size == 1) {
      this.head = null
    } else if (index == 0 && this.size != 1) {
      let deletedNode = this.head
      this.head = deletedNode.next
    } else {
      let val = 0
      let node = this.head
      let deletedNode = node.next
      while (val < index - 1) {
        node = node.next
        deletedNode = node.next
        val += 1
      }
      node.next = deletedNode.next
    }
    this.size -= 1
  }
}

const sll = new SinglyLinkedList()
sll.addNodeAtFirst(2)
sll.addNodeAtFirst(12)
sll.addNodeAtFirst(22)
sll.addNodeAtGivenIndex(90, 1)
sll.removeFromIndex(2)
console.log(sll)
