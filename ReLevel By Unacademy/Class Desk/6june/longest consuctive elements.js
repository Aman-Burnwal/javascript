// Longest Consecutive Sequence
// Longest consecutive sequence – A sequence having elements as consecutive integers. Consecutive integers can be
// in any order.
// Problem – Given an array. You need to find the length of the longest consecutive sequence such that elements are
// consecutive integers. For example –
// Input – {35, 3, 4, 88, 9, 10, 21, 5, 6}
// Output – 4
// Sequence is 3,4,5,6
// Steps –
// 1) Sort the array
// 2) Set variables count and max to 0
// 3) Iterate through the array
// 4) If the current element is not equal to (previous element + 1), set count to 1 else increment the count
// 5) Update max to a maximum of count and max.

const arr = [35, 3, 4, 88, 9, 10, 21, 5, 6];
console.log(consecutiveNumbers(arr));
// console.log(arr);

function consecutiveNumbers (array) {
    stableSelectionSort(array);

    let count = 1;
    for(let i = 0; i < array.length; i++) {
        if(array[i]  + 1 === array[i + 1]) {
            count += 1;
        } else {
            break
        }
    }
    return count;
}
function stableSelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        //Instead of swapping, we are going to shift elements by one position
        //towards right
        let minElement = arr[minIndex];
        while (minIndex > i) {
            arr[minIndex] = arr[minIndex - 1];
            minIndex--;
        }

        arr[i] = minElement;
    }

    return arr
}

// const arr2 = [3, 2, 5, 1, 43, 54, 23]

// arr2.sort(function(a, b){return a - b})

// console.log(arr2);