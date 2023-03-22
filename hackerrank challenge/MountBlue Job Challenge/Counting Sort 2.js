function countingSort(arr) {
    // Write your code here
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[max]) max = i;
       
    }
  

    let countingElements = new Array(arr[max] + 1).fill(0);


    for (let i = 0; i < arr.length; i++) {

        countingElements[arr[i]] += 1;
    }

    let ans = [];

    for (let i = 0; i < countingElements.length; i++) {

        if (countingElements[i] > 0) {
            
            while (countingElements[i] > 0) {
                ans.push(i);
                countingElements[i] -= 1;
            }
        }
    }
    return ans;
}

console.log(countingSort([1, 3, 1]))