// Even Distribution
// Question Name: Even Distribution



// Problem Statement



// Antonio wants to gift N pairs of integers to his girlfriend Teena.

// For this he went to a nearby arrays shop to buy an array consisting of 2*N integers.

// Teena likes a pair of integers (a,b) if and only the sum of two integers is even, i.e. a+b when divided by 2, leaves remainder 0.

// Antonio does not like wasting things. So before buying the array he wants to make sure that he can form N pairs using the elements of the given array such that Teena likes all the N pairs.

// For this he asked his coder friend for help. Help him.



// Input Format



// First line of input contains T denoting the number of test cases.
// First line of every test case contains a single integer denoting N.
// Next line of input contains 2*N space separated integers denoting the elements of the array Antonio is buying.


// Output Format



// For every test case print “YES”, if Antonio can form N pairs using the elements of the given array such that Teena likes all the N pairs, else print “NO”.


// Constraints



// 1<=T<=5
// 1<=N<=105
// 1<=Ai<=109


// Sample Input 1



// 2

// 2

// 2 4 1 3

// 2

// 10 12 2 3



// Sample Output 1



// YES

// NO



// Explanation of Sample 1



// In test case 1 :

// Antonio can form the pairs as : (1st element, 2nd element), (3rd element, 4th element)

// In test case 2:

// It's not possible for Antonio to form 2 pairs such that Teena likes both the pairs.



// Things to Note for the Candidate: You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)




// not completed
let test = 2;
let pair = 2;
const array = [2, 8, 4, 2]
const array2 = [10, 12, 2, 3]

evenDistribution(array, pair);
evenDistribution(array2, pair)

function evenDistribution(array, pair) {
    let length = array.length;;
    if (length % pair != 0) {
        return console.log("Not");
    }

    for (let i = 0; i <= length;) {
        if ((array[i] + array[i + 1]) % pair === 1) {
            return console.log("NOt")
        }
        i += 2;
    }

    return console.log("Yes")
}






