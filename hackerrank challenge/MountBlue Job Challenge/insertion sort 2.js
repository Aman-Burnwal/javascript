function insertionSort2(n, arr) {
    // Write your code here
   
    for (let i = 1; i < n; i++) {
      
        let j = i - 1;
        let currVal = arr[i];

        while (j >= 0 && arr[j] > currVal) {
            arr[j + 1] = arr[j]
            j--;
          
        }
        arr[j + 1] = currVal;
        console.log(arr.toString().replace(/,/g, " "));

    }


}

insertionSort2(5, [1, 4, 3,  6, 2 ])