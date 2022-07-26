// Reverse Subarray to Sort Array


// Problem – Given an array of numbers. You need to find if reversing a subarray can sort the array. For example –
// Input – [1,2,5,4,3]

// Output – true (reversing {5,4,3} will sort the array)
// Approach –
// Intuition - If the array has a structure like first increasing, then decreasing, and then again increasing, then we can say
// that after reversing the decreasing subarray, we can get our sorted array.
// Let’s see each step –
// 1) Find an Increasing subarray at the start
// 2) Find decreasing subarray
// 3) At last, check for an increasing subarray
// 4) In the third step, if we are unable to find elements, this also gives us case where we can just reverse
// decreasing subarray of step 2 and get sorted array

// Time Complexity –
// If there are N elements in the array. Then complexity will be O(N) 


const array = [1, 2, 5, 4, 3, 6, 7, 8];
console.log(reverseSubArray(array));

function reverseSubArray (array) {
    let length = array.length;
    let i = 0, j, k = 0;

    if(length < 2) {
        return true;
    }

    while(i < length) {
        if(array[i] < array[i+ 1]) {
            i++;
        } else  {
            break;
        }

    }
    if(i === length) {
        return true;
    }

    j = i ;
    while(true) {
        console.log(array[j])
        if(array[j] > array[j + 1]) {
            j++;
        } else {
            break;
        }
    }
    
    if(j === length) {
        return true;
    }

    k = j
    while(k < length - 1) {

        

        if(array[k] < array[k + 1]) {
            k++;
            
        } else {
            break;
        }
    }

    if(k === length - 1) {
        return true;
    } else {
        return false;
    }

    



    
}

