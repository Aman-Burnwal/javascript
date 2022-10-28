function BinarySearch(arr, target) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        let mid = Math.ceil((start + end  )/ 2);

        if (arr[mid] === target) return mid ;

        if (mid < target) {
            start = mid + 1
        } else {
            end = target - 1
        }
    }

    return -1
}

const arr = [1, 2, 3, 4, 5];

console.log(BinarySearch(arr, 5))