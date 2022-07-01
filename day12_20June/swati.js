let array = [1, 4, 2, 3];

// function secondHighestNumber(arr){
//     let num = Math.max(...arr);
//     arr.splice(arr.indexOf(num),1);
//     num = Math.max(...arr);
//     return num;
// }

// console.log(secondHighestNumber(array));





function secondHighestNumber(arr) {
    let max = arr[0];
    let secondMax = arr[0];
    let temp;
    
    for (let i = 0; i <= arr.length - 1; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(secondHighestNumber(array));