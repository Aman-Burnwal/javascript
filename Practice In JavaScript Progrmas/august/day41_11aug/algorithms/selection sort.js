// selection sort is a soting algorithm 
// currently we are going to learn how we will sort an array in accessinding order or decending order

/**
 * Explanation :- 
 * 
 * it will swapp 1st element with the lowest/ greatest elment with next elements
 * to find && swap the greatest/ smallest element in the array we will use nested loops
 * 
 * sample examples with iteration(phases)------------->
 * 
 * for assending order
 * let arr = [2, 9, 3, 0, 1, 5];
 * 
 * phase 0 --> [2, 9, 3, 0, 1, 5]; 
 *              // here we are swapping with arr[0] and arr[3] so sorted array = [0, 9, 3, 2, 1, 5];
 * phase 1 --> [0, 9, 3, 2, 1, 5]; 
 *              // here we are swapping with arr[1] and arr[4] so sorted array = [0, 1, 3, 2, 9, 5];
 * phase 2 --> [0, 1, 3, 2, 9, 5]; 
 *              // here we are swapping with arr[2] and arr[3] so sorted array = [0, 1, 2, 3, 9, 5];
 * phase 3 --> [0, 1, 2, 3, 9, 5]; 
 *              // no swapping will be here because there is no lower element in next 
 * phase 4 --> [0, 1, 2, 3, 9, 5]; 
 *              // here we are swapping with arr[4] and arr[5] so sorted array = [0, 1, 2, 3, 5, 9]
 * 
 * 
 *             [0, 1, 2, 3, 5, 9]; // now we have our sorted array
 * 
 */

//practical solution here

function selectionSort(arr) {
    
    for(let i  = 0; i < arr.length - 1; i++) {
        // default index of minimum element
        let min_index = i;
        
        // getting the minimum element index
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min_index]) {
                min_index = j;
            }
        }

        // swapping with current element and minimum element
        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
    return arr;
}

//default array
let arr = [3, 6, 1, 4, 0, 5, 6, 9];

// calling and printing the function 
console.log(selectionSort(arr));