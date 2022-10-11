/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
var kthPalindrome = function (queries, intLength) {

    let smallest_num = Math.pow(10, intLength - 1);
    let biggest_num = Math.pow(10, intLength) - 1;
 
    let arr = [];
   
    while (smallest_num <= biggest_num) {
        
        if (isPalindrome(smallest_num)) {

            arr.push(smallest_num);

        }
        
        smallest_num++;
    }

    // console.log(arr)
    for (let i = 0; i < queries.length; i++) {

        // console.log(queries[i]);
        // console.log(queries)
        if (queries[i] <= arr.length) {
            queries[i] = arr[queries[i] - 1]
            
        } else {
            queries[i] = -1;
        }
    }
    return queries;

};

function isPalindrome(num) {

    if (num <= 9) return true;

    let org = num;
    let rev = 0;

    while (num > 9) {
        rev = (rev * 10) + Math.floor(num % 10);
        num = Math.floor(num / 10);

        if (num <= 9) {
            rev = (rev * 10) + num;
        }
        // console.log(rev)
    }

    return rev === org;


}

const queries = [1, 2, 3, 4, 5, 90], intLength = 3;

console.log(kthPalindrome(queries, intLength));

// console.log(isPalindrome(101))