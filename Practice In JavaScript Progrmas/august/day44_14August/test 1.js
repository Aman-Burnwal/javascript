// Problem Statement Given an integer n as input, 
// you have to calculate the sum of all numbers from 1 to n using recursion 
// Constraint • n >= 1 
//     Input Format 
//             a integer n 
//     Output Format 
//             Print the output 
// Sample Input 
//             1 2 Sample 

//         Output 
//             1 3 
//             Explanation of Sample 1 1 + 2 = 3 

// Sample Input 2 4 
// Sample Output 2 10 
// Explanation of Sample 2 1+2+3+4 = 10 

// Sample Input 3 10 
// Sample Output 3 55 
// Explanation of Sample 3 1+2+3+4+5+6+7+8+9+10= 55

function  sum(n){
    
    if(n === 1) {
        return 1;
    }
    return n + sum(n-1);
    
	  
}

console.log(sum(10));