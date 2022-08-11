// Problem - 6
// Given an array . Your task is to find if there is a triplet present with the given sum.
// Input - [1,2,5,6,7,8,3], sum = 8
// Output - 1,2,5


const arr = [1, 2, 5, 6, 7, 8, 3];
const sum = 8;

triplet(arr, sum);

function triplet(arr, sum) {
    
    for (let i = 0; i < arr.length; i++) {

        let s = new Set();

        for (let j = i + 1; j < arr.length; j++) {

            let totalN = sum - (arr[i] + arr[j])

            if(s.has(totalN)) {
                console.log( arr[i], arr[j], totalN)
                return;
            } else {
                s.add(arr[j])
            }
        }
    }

    return false;
}