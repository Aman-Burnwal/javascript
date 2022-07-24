// Rearrange an array such that even positioned elements are greater than odd positioned elements


// class EvenOddArrangment {
//     constructor(array, length) {
//         this.array = array;
//         this.length = length;
//     }
    
    
//     arranging(array, length) {
//         // array.sort();
//         arr = array(a, b => a > b )
//         return array;
        
//     }
// }

// let a = new EvenOddArrangment;

// console.log(a.arranging(arr))


let arr = [1, 3, 6, 12, 53, 6, 3];
// [1, 3, 3, 6, 6, 12, 53]
arr.sort(function(a, b){return a-b});

console.log(arr);


