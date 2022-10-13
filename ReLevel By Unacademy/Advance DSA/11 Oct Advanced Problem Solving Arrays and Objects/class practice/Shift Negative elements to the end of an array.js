// using two pointer approach
// time complexity O(n);
// size complexcity 
const arr = [- 5, 3, -4, 88, -9, -10, 21, 5, 6];


function sorting(arr) {

    let i = 0;
    let j = arr.length - 1;

    while (i !== j) {


        
        if (arr[i] < 0 && arr[j] > 0) {

            [arr[i], arr[j]] = [arr[j], arr[i]]

        } else if (arr[i] > 0) {
            
            i++;
            
        } else if (arr[j] < 0) {

            j--;
        }
    }
    return arr;
} 

console.log(sorting(arr))

