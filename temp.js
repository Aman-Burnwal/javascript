function binarysearch(arr, n, k) {
  // code here
  let start = 0;
  let end = n - 1;
  let mid = 0; 


  while (start <= end) {

    mid = parseInt((start + end) / 2);

    // console.log(mid)

    if (arr[mid] === k) {

      return mid;

    } else if (arr[mid] < k) {

      start = mid + 1;
      

    } else if (arr[mid] > k) {
      end = mid - 1;
      
    }
  }
  return;
}

N = 5
arr = [1, 2, 3, 4, 5];
k = 4;
console.log(binarysearch(arr, N, k))