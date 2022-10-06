class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        };
        this.tail = this.head;
        this.size = 1;
    }
    appendAdd(nodeData) {
        let newNode = {
            value: nodeData,
            next: null,
        }; 
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;

    }
}

let list = new List(200)
list.appendAdd(300)
console.warn(list)