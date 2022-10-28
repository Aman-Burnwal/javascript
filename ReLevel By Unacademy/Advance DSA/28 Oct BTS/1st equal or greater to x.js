const arr = [1, 1, 1, 2, 2, 2, 2, 3, 5, 5, 7, 7, 7, 9, 9, 9];

const target = 2;

function binarySearch(arr, target) {
    
    let start = 0; 
    let end = arr.length - 1;

    let found = -1;

    while (start <= end) {

        let mid = Math.ceil((start + end) / 2);

        if (arr[mid] === target && arr[mid - 1] !== target) {
            return mid;

        }  else if (arr[mid] > target) {
            
            end = mid - 1;
            found = arr[mid];
        } else {
            
            start = mid + 1;
            
        }
        
    }
    return found;
}

console.log(binarySearch(arr, 6));

