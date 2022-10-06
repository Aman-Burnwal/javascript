// linked list have head and tail
// every list is connected tail
// it is in object form as {value: "", next: null}
// value is our data and next is used to connect with another list
// next is the chain of our linked list
// in last linked list(tail) next value will be null

// created a class 
class List {

    // constructor created 
    constructor(data) {
        // every linked list have a head and tail
        
        this.head = {
            value: data,
            next: null,
        };

        // assigning current head as a tail
        this.tail = this.head;
        // current list size
        this.size = 1;
    }

    // this fucntion is used to add new linked list data
    append(newData) {

        // assigning new data as an object
        let newNode = {
            value: newData,
            next: null
        };
        // adding new tail
        this.tail.next = newNode;
        // telling our linked list that new object is your new tail 
        // if we don't use it then we will get as tail as head;
        this.tail = newNode;
        // increasing list size
        this.size++;
    }
}

// creating new object
const list = new List(200);
// calling our object
list.append(300)
// printing our list
console.log(list)