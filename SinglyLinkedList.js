class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Add an element
  addFirst(value) {
    let newNode = new Node(value);

    if (this.head === null) this.head = newNode;
    else {
      let prevHeadNode = this.head;
      this.head = newNode;
      newNode.next = prevHeadNode;
    }

    this.length += 1;
  }

  addLast(val) {
    let newNode = new Node(val)

    if(this.head === null){
        this.head = newNode;
    }else{
        let curr = this.head;
        while(curr.next!== null){
            curr = curr.next;
        }
        curr.next = newNode;
    } 

    this.length++;
  }





  print(){
    let curr = this.head;
    while(curr){
        console.log(curr)
        curr=curr.next;
    }
  }
}

const sl1 = new SinglyLinkedList();
sl1.addFirst(32);
sl1.addFirst(2);
sl1.addFirst(22);
sl1.addLast(36);
sl1.print();
