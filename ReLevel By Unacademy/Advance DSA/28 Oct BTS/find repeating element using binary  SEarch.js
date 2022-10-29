const arr = [0, 1, 2, 3, 4, 5, 5];

function repatedElement(arr) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        let mid = Math.ceil((end + start) / 2);
        
        // console.log(mid, arr[mid])

        if (arr[mid] === arr[mid + 1] || arr[mid ] === arr[mid - 1]) return arr[mid];

        if (arr[mid] >= mid) {
            start = mid + 1;
  
            
        } else {

            end = mid - 1;

        }
    }

    return -1;
}


console.log(repatedElement(arr));