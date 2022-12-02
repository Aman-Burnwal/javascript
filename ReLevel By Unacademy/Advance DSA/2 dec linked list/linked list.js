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

        this.tail = this.head
    }
}

let list = new List();

console.log(list);