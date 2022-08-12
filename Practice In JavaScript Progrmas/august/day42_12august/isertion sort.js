function insertionSort(arr) {
    //Assume that arr[0] is sorted, which means we will have to sort
    //elements from 1..arr.length - 1
    let firstElementUnsortedPart, j;

    for (let i = 1; i < arr.length; i++) {
        firstElementUnsortedPart = arr[i];
        //Sorted part will be from 0 to i - 1
        j = i - 1;

        while (j >= 0 && arr[j] > firstElementUnsortedPart) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = firstElementUnsortedPart;
        console.log(arr);
    }
    return arr;
}

let arr = [5, 4, 3, 2, 0, 7, 6]
console.log(insertionSort(arr))
/*
arr = [5, 4, 3, 2, 0, 7, 6]
Assuming that arr[0] is sorted

Outer loop: i = 1; i < arr.length(7)
			firstElementUnsortedPart = 4
            j = 0
            
            Inner loop: j >= 0 && 5 > 4
            arr[0 + 1] = arr[0], j = j - 1 = -1
            
            arr[0] = 4
            arr = [4, 5, 3, 2, 0, 7, 6]
      
Outer loop: i = 2; i < arr.length(7)
			firstElementUnsortedPart = arr[i] = arr[2] = 3
            j = i - 1 = 2 - 1 = 1
            
            Inner loop: j >= 0 && arr[j] > firstElementUnsortedPart(5 > 3),
            arr[1 + 1] = arr[1]
            j = j - 1 = 1 - 1 = 0
            arr = [4, 5, 5, 2, 0, 7, 6]
            
            Inner loop: j >= 0 && arr[j] > firstElementUnsortedPart(4 > 3),
            arr[0 + 1] = arr[0]
            j = j - 1 = 0 - 1 = -1
            arr = [4, 4, 5, 2, 0, 7, 6]
            
            arr[j + 1] = firstElementUnsortedPart
            arr[-1 + 1] = 3
            
            arr = [3, 4, 5, 2, 0, 7, 6]
            
*/
