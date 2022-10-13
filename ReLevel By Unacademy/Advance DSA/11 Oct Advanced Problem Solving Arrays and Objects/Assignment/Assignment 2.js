// 2. Write a program to rearrange the elements such like positive numbers shift to the end and negative
// numbers to the start.

function rearrange(arr, left, right) {

    while (left!== right) {
        if (arr[left] >= 0 && arr[right] < 0) {

            [arr[left], arr[right]] = [arr[right], arr[left]]
        } else if (arr[left] < 0) {
            left++;
        } else if (arr[right] >= 0) {
            right--;
        }
    }
    return arr;
}


const arr = [- 5, 3, -4, 88, -9, -10, 21, 5, 6];

rearrange(arr, 0, arr.length - 1);

console.log(arr);