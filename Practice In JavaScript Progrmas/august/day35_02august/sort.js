// class Mjvirus{
//     constructor(array)
//     {
//         this.a = array
//     }
//     sorting()
//     {
//        return this.a.sort((a, b) => a - b)
//     }
// }

// let obj = new Mjvirus([2, 5, 1, 8])

// console.log(obj.sorting());

class Mjvirus{
    constructor(array)
    {
        this.a = array
    }
    sorting()
    {
       this.a.sort((a,b) => (a-b))
    }
}

let obj = new Mjvirus([5,4,3,2,1])
console.log(obj.sorting())