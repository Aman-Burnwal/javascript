// Find the count of the odd numbers in an array
// Problem Statement Given an array of size n, 
// find the count of the odd numbers in an array. 
// Odd numbers are numbers which are not divisible by 2, eg. 1, 3, 5, 17, 55
// Hint - we use % operator for finding the remainder 
// Constraint • 1 <= N <= 10^5 
// • Array A can contain duplicates 
// • All input values are integers Input Format 


// • First-line contains N. 
// • Second line contains N space-separated integers denoting the array A. 
// • Third line will contain the target element Output Format 
// • Print the index 

// Sample Input 1 6 22 7 111 3 5 1 
// Sample Output 1 5 
// Explanation of Sample 1 In the array, 7, 111, 3, 5, 1 are odd numbers 

// Sample Input 2 7 5 7 4 8 6 -5 -8 
// Sample Output 2 3 
// Explanation of Sample 2 In the input array, 5, 7, -5 are odd numbers 

// Sample Input 3 7 8 12 76 42 8 90 24 
// Sample Output 3 0 
// Explanation of Sample 3 In the input array, no odd numbers are present

let t = readline();
while (t--) {
    let arr = [];
    arr = readline().split(" ");

    let x = arr[0];
    let y = arr[1];
    let z = arr[2];
    // write your logic here
    let set = new Set();

    const arr1 = [arr[2], ...arr];
    arr1.forEach(element => { set.add(element) });

    const array = [...set];
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {

            count++;
        }
    }
    console.log(count);
}

