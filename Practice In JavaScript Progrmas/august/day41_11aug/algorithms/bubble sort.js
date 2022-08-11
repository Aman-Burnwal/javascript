// bubble sorrt is a sorting algorithm which time complexity is less then O(n ^ 2)
/**
 * Explanation : - we will use two loops in nested. so n * n = n^2 time complexity 
 * 1st loop will be used to iterate total times 
 * 2nd loop will be used to swap the elements
 * for examples : - 
 *              let arr = [1, 4, 9, 2]                   
 *              phase 1 : - [1, 4, 2, 9]
 *              phase 2 : = [1, 2, 4, 9] 
 * 
 * now it is sorted so no need to swap more elements so we will check every swapping times that is it was swapped or not
 * if not then we will come out from the both loop
 * 
 */

// let me explain it with exmaples

// creating a simple function declaration for bublle sort 

function bubbleSort(arr) {

    // loop for iterating over the array 
    for (let i = 0; i < arr.length - 1; i++) { // length - 1 because we will swap from current element and after the element 
            
        // isSweeped help us to run minimum times of loop. by default i am using it as a false value
        let isSweeped = false;

        // this loop will be used to swap the elements
        for (let j = 0; j < arr.length - i - 1; j++) {

            // for increasing sorting order use > and for decreament sorting use < 
            // checking is current element is greater/smaller then next element 
            if (arr[j] < arr[j + 1]) {

                // creating a temporary variable to swap current and next element 
                let temp = arr[j];

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;

                isSweeped = true;

            }

        }

        // if swepped were done then no need to run the loop so we are going out loop using break;
        if(isSweeped != true) {
            break;
        }
        
    }
    // returning the sorted array;
    return arr;
}


let arr = [7, 1, 9, 3, 4, 5, 8, 6, 7, 8, 0];

console.log(bubbleSort(arr));

