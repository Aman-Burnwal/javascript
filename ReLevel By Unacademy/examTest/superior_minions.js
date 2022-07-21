// Superior signs
// Question Name: Superior Signs

// Problem Statement
// There are N signs standing in a line. There is also a string S of length N-1 consisting only of ‘<’ and ‘>’ characters.
// If the ith character (for each 1<=i<N) of string S is ‘>’, this means the ith sign is superior to the (i+1)th signs, 
// and (i+1)th sign is inferior to the ith sign.

// Whereas if the ith character (for each 1<=i<N) of string S is ‘<’, 
// this means the ith sign is inferior to the (i+1)th sign and (i+1)th sign is superior to the ith sign.

// Now you have got the job of distributing candies to the signs. Each sign must get atleast one candy and 
// If a superior sign does not get strictly more candies than an inferior sign then 
// the superior will beat the inferior sign to death. You don’t want this to happen and hence want to distribute the candies such that :

// Each sign gets atleast one candy.
// A superior sign gets strictly more candies than an inferior sign.
// To accomplish this task you went to the candy shop to buy candies. 
// Print the minimum number of candies you need to buy to accomplish the task.

// Input Format
// First line of input contains string S.

// Output Format
// Print the minimum number of candies you need to buy to accomplish the task.

// Constraints
// 2<=N<=5*105

// Sample Input 1
// <>>

// Sample Output 1
// 7

// Explanation of Sample 1
// Distribute the candies as : 
// First sign gets 1 candy, 
// second signs gets 3 candies, 
// third sign gets 2 candy, and 
// fourth sign gets 1 candy.

// Lets represent the distribution by an array = [1,3,2,1].
// Here, sign 2 is superior to minon 1 and hence has got more candies than sign 1.
// sign 2 is superior to minon 3 and hence has got more candies than sign 1.
// sign 3 is superior to minon 4 and hence has got more candies than sign 4.

