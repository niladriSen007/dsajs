class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //append(element): Adds a new element in the list.
  //removeAt(position): Removes an element from the given position in the list and returns it.
  //insert(position, element): Adds an element at the given position in the list.
  //getElementAt(position): Returns the node at the given position in the list.
  //toString(): Joins all the elements of the list and returns it as a string.
  //toArray(): Converts the linked list to the array and returns it.
  //indexOf(element): Returns the position of the given element in the list.
  //delete(element): Removes the given element from the list.
  //deleteHead(): Removes the first element from the list.
  //isPresent(element): Returns true if element is present in the list, false otherwise.
  //isEmpty(): Returns true if the list is empty, false otherwise.
  //size(): Returns the size of the list.
  //getHead(): Returns the whole list to iterate in forward direction.

  append = (val) => {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let curr = this.head;
      while (curr.next !== this.head) {
        curr = curr.next;
      }
      curr.next = newNode;
      newNode.next = this.head;
    }
    this.size++;
  };



  printList = () => {
    let curr = this.head;
    while (curr.next !== this.head) {
      console.log("Node Value: ", curr);
      curr = curr.next;
    }
  };
}

let cll1 = new CircularLinkedList();
cll1.append(12);
cll1.append(32);
cll1.append(42);
cll1.append(52);
cll1.append(22);
cll1.printList();
