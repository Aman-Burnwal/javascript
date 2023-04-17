// https://practice.geeksforgeeks.org/problems/find-the-odd-occurence4820/1?page=1&category[]=Bit%20Magic&sortBy=submissions



function getOddOccurrence(arr, n) {
    //code here
    let ans = 0;

    for (let i in arr) {
        ans = ans ^ arr[i]
        console.log(ans)
    }
    return ans;
}


console.log(getOddOccurrence([1, 2, 3, 2, 3, 1, 3]))
