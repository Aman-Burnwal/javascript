// Reverse Array
// Problem – Given an array of numbers. You need to reverse the array. For example –
// Input – [1,2,3,4,5]
// Output – [5,4,3,2,1]

// Approach 1 – We can use a swapping operation to get the desired output. Let’s see each
// step –
// 1) Initialize two pointers - start=0, end = n-1 where n = number of elements in array
// 2) Swap elements present at start and end
// 3) Start = start+1, end = end -1
// 4) Repeat step1 till start <= end

// Time Complexity –
// If there are N elements in array. Then complexity will be O(N

const  arr = [1,2,3,4,5,6];

function reverseArray(array) {
    let length = array.length - 1;
    let mid = Math.floor(length / 2);

    for(let i = 0; i <= mid; i++) {
        let temp = array[i];
        array[i] = array[length - i];
        array[length - i] = temp;
    }
}
// uncomment below two lines to run the program
// reverseArray(arr);
// console.log(arr);




// Approach 2 – We can use recursion to get the desired output. Let’s see each step –
// 1) Initialize two pointers - start=0, end = n-1 where n = number of elements in array
// 2) Swap elements present at the start and end
// 3) Recursively call reverseArray function

// Time Complexity –
// If there are N elements in the array. Then complexity will be O(N)

function reverseArrayUsingRecursion(array,i, length, mid) {
    if(i > mid) {
        return;
    }

    let temp = array[i]
    array[i] = array[length - i];
    array[length - i ] = temp;
    i++;
    reverseArrayUsingRecursion(array, i, length, mid)
    return ;
}

const array = [1, 2, 3, 4, 5 , 6]

let length = array.length - 1

let mid = Math.floor(length / 2)

reverseArrayUsingRecursion(array, 0, length, mid)

console.log(array)