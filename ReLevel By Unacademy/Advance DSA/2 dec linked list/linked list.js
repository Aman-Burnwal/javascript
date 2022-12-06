// Q. what is linked list


// there are four type of LL
        /**
         * 1. Singly linked list
         * 2. doubly linked list
         * 3. circular linked list
         * 4. circular doubly linked list
         */



class List {

    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.size = 1;
        this.tail = this.head
    }

    appendNode(newData) {

        let newNode = {
            value: newData,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
    }
}

let list = new List(64);
list.appendNode(32)
list.appendNode(553);
list.appendNode(456)

console.log(list);