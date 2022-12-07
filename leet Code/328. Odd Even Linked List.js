/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        };
        this.tail = this.head;
        this.size = 1;
    }

    // adding new value
    add(data) {
        let newNode = {
            value: data,
            next: null,
        };

        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;

    }
    // travesing

    traversing() {
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size) {
            console.log(currentNode);
            currentNode = currentNode.next;
            counter++
        }
    }
}


const list1 = new LinkedList(1);

// list1.add(43);
// list1.add(56);
// list1.traversing();
// console.log(list1);


list1.add(2);
list1.add(3);
list1.add(4);
list1.add(5)













var oddEvenList = function(head) {

    if(head === null || head.next === null) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;
    console.log("before loop");
    console.log("odd", odd);
    console.log("even", even);
    console.log("evenHead", evenHead);

    console.log("loop started");
    while(odd.next !== null && even.next !== null) {

        odd.next = even.next;
        console.log(odd)
        odd = odd.next;
        console.log(odd)
        even.next = odd.next;
        console.log(even)
        even = even.next
        console.log(even)
    }

    console.log("loop ended")
    odd.next = evenHead;
    return head;
    
};
console.log(list1)
// console.log(oddEvenList(list1))


/**
Input
head =
[1,2,3,4,5]
Output
[1,3,5,2,4]
 */