// Problem - 4
// You have an array of n elements. Your job is to find the element that is in majority.
// Any element whose count is greater than n/2 will be considered as a majority element.
// Example-1:
// Input: [3,1,3,3,2]
// Output: 3

const array = [4,1,4,4,2], n = 3;
majorityElements(array,n);

function majorityElements(array , n) {
    let map = new Map();

    for(let i = 0; i < array.length; i++) {
        if(map.has(array[i])) {
            let value = map.has(array[i]);
            map.set(array[i], ++value);
        } else {
            map.set(array[i], 1)
        }
    }

    return map.forEach((index, value) => index > n/2 ?console.log(value) :"");
}