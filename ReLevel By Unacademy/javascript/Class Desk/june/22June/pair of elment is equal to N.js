// Problem - 2
// Find the pair of elements in a given array A such that the sum of the pair is equal to N
// Input: A = [10, 20, 10, 40, 50 , 70], N=50
// Output: 2,3

const A = [10, 20, 10, 60, 40, 50, 70], N = 50;

// console.log(pair(A, N));
// this function will be work if the question asks like this find the subarray which sum is equal to N
// function pair(array, sum) {

//     for(let i = 0; i < array.length - 1; i++) {
//         if(array[i] + array[i + 1] === sum) {

//             return `${array[i]} ${array[i + 1]}`
//         }
//     }
//     return `not found`
// }


// console.log(pair(A, N)); 
// time complexity O(n^2) this will be work but it is not a good solution because it takes more times
// function pair(array, sum) {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === sum) {
//                 return `${array[i]}, ${array[j]}`
//             }
//         }
//     }

//     return false;
// }

// using set 
// time complexity O(n)

pair(A, N); 

function pair(array, sum) {
    let s = new Set();

    for(let i = 0; i < array.length; i++) {
        
        let temp = sum - array[i];

        if(s.has(temp)) {
            console.log(`number is ${array[i]} + ${temp} = ${sum}`)
            return;
        } else {
            s.add(array[i]);
        }
    }
    return;
}


