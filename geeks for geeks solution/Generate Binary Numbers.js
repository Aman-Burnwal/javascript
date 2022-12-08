//User function Template for javascript

/**
 * @param {number} N
 * @returns {String[]}
*/

class Queue {
    constructor() {
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }

    // Add the 'element' to the rear of the queue
    // Time: O(1)
    push(element) {
        this.data[this.rear] = element;
        this.rear++;
    }

    isEmpty() {
        return this.front == this.rear;
    }

    print() {
        for (let i = this.front; i < this.rear; ++i)
            console.log(this.data[i]);
    }

    // Delete the front element and return the deleted element
    // Time: O(1)
    pop() {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        let frontElement = this.data[this.front];
        this.front++;
        return frontElement;
    }

    length() {
        return this.rear - this.front;
    }

    // Just return the front element
    // Time: O(1)
    getFront() {
        if (this.isEmpty()) {
            throw new Error("Queue is Empty!");
        }
        return this.data[this.front];
    }
}

// class Solution {
//     //Function to generate binary numbers from 1 to N using a queue.
//     generate(N) {
//         //your code here
//         let q = new Queue();
//         q.push('1');
//         let ans = []

//         for (let i = 1; i <= N; ++i) {
            

//             ans.push(q.getFront());
           
//             let x = q.pop();
//             q.push(x + '0');
//             q.push(x + '1');
            
           

           
//         }
        

//         return ans;
//     }
// }


// let s = new Solution();

// console.log(s.generate(5));


function generate(N) {
    //your code here

    let queue = ["1"];
    let ans = [];
    let index = 0;

    for (let i = 0; i < N; i++) {

        ans.push(queue[index])

        let x = queue[index];

        index++;

        queue.push(x + "0");
        queue.push(x + "1");
    }

    return ans;


}

console.log(generate(5))