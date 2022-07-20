/**merge sort is based on devide and concur method
 * in this program we devide the array till it every element have an array.
 * then we compare and merge using another function
 * */


// class MergSortAlgo{
//     constructor(arr){
//         this.arr = arr;
//     }
// }

function mergesortedArray(arr, s, m, e){
    // first sorted array will be  from s to m
    // second sorted array will be from m + 1 to e

    let firstSortedArrayLength = (m -  s) + 1;
    let secondSortedArrayLength = (m + 1) - e;
   
}

function mergeSortAlgo(arr, s, e){

    if(s >= e){
        return;
    }
    let m = parseInt(s + (e - s) / 2);

    mergeSortAlgo(arr, s, m);
    mergeSortAlgo(arr, m+ 1, e);
    mergesortedArray(arr, s, m, e);
}


let arr = [1, 4, 2, 5, 8, 3];
let e = arr.length;
console.log(mergeSortAlgo(arr, 0, e));


