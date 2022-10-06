class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        };
        this.tail = this.head;
        this.size = 1;
    }


    append(valueData) {
        let newList = {
            value: valueData,
            next: null,
        };
        this.tail.next = newList;
        this.tail = newList;
        this.size++;



    }
    
}



const list = new List(400);
list.append(200);

console.log(list);