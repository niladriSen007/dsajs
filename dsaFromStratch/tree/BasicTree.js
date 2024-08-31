class Node {
  constructor(data) {
    this.data = data
    this.left = this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(data) {
    const newNode = new Node(data)
    let currentNode
    if (this.root == null) {
      this.root = newNode
      return this
    }
    currentNode = this.root
    while (true) {
      if (data == currentNode.data) return
      if (data < currentNode.data) {
        if (currentNode.left == null) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right == null) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      }
    }
  }

  find(target) {
    let currentNode = this.root
    let found = false
    if (currentNode == null) return false
    while (currentNode && !found) {
      if (currentNode.data == target) found = true
      if (currentNode.data > target) currentNode = currentNode.left
      if (currentNode.data < target) currentNode = currentNode.right
    }
    return found
  }
}

const newTree = new BinarySearchTree()
newTree.insert(10)
newTree.insert(5)
newTree.insert(2)
newTree.insert(13)
newTree.insert(1)
const targetNode = newTree.find(3)
console.log(targetNode)
