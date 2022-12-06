// Q. what is linked list

// const { Collapse } = require("bootstrap");


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
            value: data == undefined ? 0 : data,
            next: null,
        }

        this.tail = this.head;
        this.size = 1;
    }

    appendList(newData) {
        let nodeNew = {
            value: newData,
            next: null,
        }

        this.tail.next = nodeNew;
        this.tail = nodeNew;
        this.size += 1;
    }

    traversing() {

        let counter = 0;
        let tra = this.head;

        while (counter < this.size) {
            
            console.log(tra.value)
            tra = tra.next;
            counter++
        }
    }

    traversing_without_counter() {
        
        let tra = this.head;

        while (tra) {
            
            console.log(tra.value);
            tra = tra.next;
        }
    }

    deleteNode(index) {
        let counter = 1;

        let lead = this.head;

        if (index === 1) {
            this.head = this.head.next;
        }
        else {
            while (counter < index - 1) {
                lead = lead.next;
                counter++;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
        }
        this.size -= 1;
    }

    inserNode(index, value) {

        let counter = 1;
        let CurrNode = this.head;

        while (counter < index - 1) {
            
            CurrNode = CurrNode.next;
            counter++
            
        }
        let nextNode = CurrNode.next;
        CurrNode.next = {
            value: value,
            next: nextNode,
        }
        this.size += 1;
    }


    searchNode(value) {
        let node = this.head;
        let counter = 1;
        let found = false;
        while (node) {
            
            if (node.value = value) {
                counter++;
                found = true;
                break;
            }
            node = node.next
            counter++;
            
        }

        found ? console.log(counter) : console.log("Not found");
        
        
    }
}


let list = new List(8);

list.appendList(45);
// list.traversing();
// list.traversing_without_counter();
// console.log(list);
list.appendList(45);
list.appendList(234);
// console.log(list);
// list.traversing()
list.inserNode(3, 59)
// list.deleteNode(2)
// console.log("inser value")
list.traversing();
list.searchNode(45)