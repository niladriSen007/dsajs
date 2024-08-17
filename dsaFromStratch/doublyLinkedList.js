class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.size = 0
    this.head = null
  }
  addAtFirst(data) {
    const node = new Node(data)
    if (this.size == 0) {
      this.head = node
    } else {
      let oldNode = this.head
      node.next = oldNode
      this.head = node
      oldNode.prev = node
    }
    this.size += 1
  }

  insertAtPosition(data, index) {
    const node = new Node(data)
    if (index < 0 || index > this.size) console.log("Please insert valid index")
    else if (index == 0) this.addAtFirst(data)
    else {
      let val = 0
      let item = this.head
      while (val < index - 1) {
        item = item.next
        val += 1
      }
      let oldNode = item.next
      oldNode.prev = node
      node.next = oldNode
      item.next = node
      node.prev = item
    }
    this.size += 1
  }

  printList() {
    let curr = this.head
    while (curr != null) {
      console.log(curr)
      curr = curr.next
    }
  }
}

const dll = new DoublyLinkedList()
dll.addAtFirst(12)
dll.addAtFirst(22)
dll.addAtFirst(32)
dll.insertAtPosition(90,1)
dll.printList()
