function findElement(arr, targetElement) {

    let left = 0, right = arr.length - 1;
    

    while (left <= right) {
        
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === targetElement) {
            left = mid;
            right = mid;
            let isMore = true;
            while (isMore) {
                isMore = false;
                if (arr[left - 1] === targetElement) {

                    left--;
                    isMore = true;
                } 
                if (targetElement=== arr[right + 1]) {
                    right++;
                    isMore = true;
                }
            }
            return (`${left} ${right}`);
        }

        if (arr[mid] < targetElement) {
            left = mid + 1
        } else {
            right = mid - 1;
        } 
        

    }
    return (`Not found`);
}

const arr = [0, 1, 2, 2, 2, 3, 3, 4, 5, 8, 8, 8, 9, 10, 10, 10];

let targetElement = 2;

console.log(findElement(arr, targetElement));


