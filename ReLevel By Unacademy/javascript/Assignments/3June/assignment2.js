// Write code for finding the smallest element in an array.


const arr = [3, 8, 3, 1, 9, -1, -3];

function smallestElement (arr) {
    let length = arr.length;
    let smallest = arr[0]

    for(let i = 0; i < length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

console.log(smallestElement(arr));