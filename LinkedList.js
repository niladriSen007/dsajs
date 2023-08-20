class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addLast = (val) =>{
        let newNode = new Node(val);
        if(this.head === null)
        {
            this.head = newNode;
            newNode.next = null;
        }
        else
        {
            let current = this.head;
            while(current.next !== null)
            {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = null;
        }
        this.size++;
    }


    addFirst = (val) =>{
        let newNode = new Node(val);
        if(this.head === null)
        {
            this.head = newNode;
            newNode.next = null;
        }
        else
        {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    insertAt = (index,val) =>{
        if(index < 0 || index>this.size)
            console.log("Bhai Thoda Dekh ke Index do")
        let newNode = new Node(val)
        if(index === 0)
        {
            newNode.next = this.head;
            this.head = newNode;
        }
        else{
            let curr  = this.head;
            let prevNode;
            let id = 0;
            while(id<index){
                prevNode = curr;
                curr = curr.next;
                id++;
            }
            prevNode.next = newNode;
            newNode.next = curr;
        }
        this.size++;
    }


    removeFirst = () =>{
        if(this.size === 0)
            console.log("No element to delete")
        let curr = this.head;
        if(this.size === 1){
            this.head = null;
            this.head.next = null;
        }
        else{
            curr = curr.next;
            this.head = curr;
        }
        this.size --;
    }


    removeLast = () =>{
        if(this.size === 0)
            console.log("No element to delete")
        let curr = this.head;
        let prev = null;
        while(curr.next !== null){
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        this.size --;
    }



    removeIndex = (index) =>{
        if(index < 0 || index>this.size)
            console.log("Bhai Thoda Dekh ke Index do")
        if(index === 0)
            this.removeFirst()
        else if(index === this.size - 1)
            this.removeLast();
        let curr = this.head;
        let prev = null;
        let id = 0;
        while(id<index){
            prev = curr;
            curr = curr.next;
            id++;
        }
        prev.next = curr.next;
        this.size --;
    }

    search = (val) =>{
        let curr = this.head;
        let id = 0;
        while(curr){
            if(curr.data === val)
                console.log(`Element is present at index ${id}`)
            id++;
            curr=curr.next;
        }
        if(curr === null )
            console.log("Element Not Present")
    }


    

    showSize = () =>{
        console.log(`The size of the Linked List ${this.size}`)
    }

    printList = () =>{
        let curr = this.head;
        while(curr){
            console.log("Node Value: ",curr);
            curr = curr.next;
        }
    }


    isEmpty = () =>{
        if(this.size === 0)
            console.log("Linked List IS Empty")
    }


    toString = () =>{
        let curr = this.head;
        let llString = ""
        while(curr){
            llString += curr.data + "->";
            curr = curr.next;
        }
        console.log(llString)

    }



    toArray = () =>{
        let curr = this.head;
        let llArray = []
        while(curr){
            llArray.push(curr.data);
            curr = curr.next;
        }
        console.log(llArray)

    }
}

let l1 = new LinkedList();
l1.addLast(23);
l1.addLast(33);
l1.addLast(43);
l1.addFirst(98);
l1.addFirst(29);
l1.insertAt(2,87)
// l1.removeFirst();
// l1.removeLast()
// l1.showSize();
// l1.removeIndex(1)
l1.printList()
// l1.toString()
l1.toArray()
// l1.search(233)
