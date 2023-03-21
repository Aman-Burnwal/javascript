function twoArrays(k, A, B) {
    // Write your code here
    A.sort((a, b) => a - b);

    B.sort((a, b) => a - b);
    console.log(A);
    console.log(B);
    console.log(k)

    for (let i = 0; i < A.length; i++) {

        if (A[i] + B[i] < k) return "NO";

     

    }
    return "YES"

}

const A = [1, 3, 2];
const B = []
