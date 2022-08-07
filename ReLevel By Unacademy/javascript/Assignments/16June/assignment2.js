function rearrange(arr, n) {
    let mid = 0;
    let end = n-1;
    let swap = 0;
    while (mid <= end) {
        if (arr[mid] >= 0) {
        	mid++;
        } else {
        	swap = arr[end];
          arr[end] = arr[mid];
          arr[mid] = swap;
          end--;
        }
    }
    return arr;
}
 

 

let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
let n = arr.length;
console.log(rearrange(arr, n));