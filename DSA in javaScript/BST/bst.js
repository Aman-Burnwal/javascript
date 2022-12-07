/*

Q. What is tree in DS?


*/
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BsT{
    constructor() {
        this.root = null
    }
    isTreeEmpty() {
        return this.root === null;
    }
    makeTree(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
            
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    serach(root, value) {
        if (root === null) return false;
        
        if (root.value === value) return true;

        if (root.value > value) return this.serach(root.left, value);

        if (root.value < value) return this.serach(root.right, value);
    }
}

let bst = new BsT();
bst.makeTree(5)
bst.makeTree(45);
bst.makeTree(34);
bst.makeTree(5);
bst.makeTree(40);
// console.log(bst.isTreeEmpty());
console.log(bst.serach(bst.root, 40))
// console.log(bst);








