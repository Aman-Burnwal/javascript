// defination of heap
// A heap is a special tree - based data structure
//     in which the tree is a complete binary tree.Generally,
//     Heaps can be of two types:
// 1. Max - Heap: In a Max - Heap the key present at the root node must be greatest among the keys present at all of its children.The same property must be recursively true for all sub - trees in that Binary Tree.
// 2. Min - Heap: In a Min - Heap the key present at the root node must be minimum among the keys present at all of its children.The same property must be recursively true for all sub - trees in that Binary Tree.


// 1. Max - Heap: In a Max - Heap the key present at the root node must be greatest among the keys present at all of its children.The same property must be recursively true for all sub - trees in that Binary Tree.

class MaxHeap{
    constructor(maxCapacity) {
        this.heap = new Array();
        this.maxCapacity = maxCapacity;
    }

    isfull = function () {

        return this.heap.length === this.maxCapacity;

    }


    insert = function (data) {
        
        if (this.isfull()) throw new Error("already Maximum limit reached");
        
        this.heap.push(data);

        let child = this.heap.length - 1;

        while (child > 0) {
            
            const parent = parseInt((child - 1) / 2);

            if (this.heap[parent] > this.heap[child]) return;

            this._swap(child, parent)

            child = parent;
        }


    }
    _swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
}


let Str = "34253432";
let ans = ""
let k = 5;

console.log(Str.length)

for (let i = k - 1; i < Str.length - 1; i++) {

    // console.log(i)
    ans += Str[i];
}
console.log(ans);