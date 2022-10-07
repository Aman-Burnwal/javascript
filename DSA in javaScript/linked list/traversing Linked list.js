// create a basic linked list using function
//

class LinkedList{
    // creating our head
    constructor(data) {
        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
        this.size = 1;

    }

    // adding our new tail
    add(newTailData) {
        let newNode = {
            value: newTailData,
            next: null,
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    // traversing in our list
    traversing() {
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size) {
            console.log(currentNode);
            currentNode = currentNode.next;
            counter++;
            
        }
    }


}


const list = new LinkedList(4);
list.add(59);
list.add(45);
list.traversing();
// console.log(list);