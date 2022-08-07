// Alien Language

// Aliens started their journey towards our earth. They somehow mastered our English language through a
// dictionary. However, they wanted a new language hence they shoveled our English alphabets
// “abcdefghijklmnopqrstuvwxyz”.


// Now they want us to learn their new language which is basically English but characters are shoveled
// now.

// To test whether you were able to understand their language they have a test for you, you are given Q
// words you need to sort them by following the new lexicographical ordering which the aliens gave and not
// the English we know.

// Example: S=”bacdefghijklmnopqrstuvwxyz” , Q=3
// 		[“aa”,”ba”,”bb”]
// 	The lexicographical ordering will be: [“bb”,”ba”,”aa”]
// 	As in the new ordering “b” comes before “a”.


// INPUT:

// First-line contains integer T denoting the number of test cases.
// First line of each test case gives a string S of 26 characters denoting the new ordering.
// Second line of the test case contains a single integer Q number of words .
// Next Q line follows one word of lowercase latin characters.


// OUTPUT:
// For each test case output Q lines each line containing one word in lexicographical order.


// Constrains:

// 1<= T<= 1000
// 1<= Q<= 100
// 1<= |WORD| <=50


// Sample Input:
// 1

// bacdefghijklmnopqrstuvwzyx

// 3
// bb
// yb
// za

// Sample Output:

// bb
// za
// yb

// Explanation:
// In the new ordering “b” comes before “a” also “z” < “y” < “x”.	
const AlienLanguage = (lang, arr) => {
    const langArr = lang.split('');
    const langObj = {};
    const unSortedObj = {};
    const letterToNum = [];
    const sortedArr = [];
    langArr.map((item, index) => langObj[item] = (index + 1));
    arr.map(item => {
        let num = ''
        item.split('').map(letr => {
            num += langObj[letr];
        })
        letterToNum.push(parseInt(num));
        unSortedObj[parseInt(num)] = item;
    })
    quickSort(letterToNum);
    letterToNum.map(item => {
        sortedArr.push(unSortedObj[item]);
    })
    return sortedArr;
}
 
// Quick Sort function => find (length - 1)
// and set start = 0
const quickSort = (arr) => {
    const end = arr.length - 1;
    const start = 0;
    sortArray(arr, start, end)
}
 
// Swapping two index value in an array
const swap = (arr, a, b) =>{
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
 
// Sort function which execute recursively till sort
const sortArray = (arr, low, high) => {
    // To come out of the infinite loop
    if (low >= high) {
        return;
    }
    let start = low;
    let end = high;
    const mid = Math.floor((start + end) / 2);
    // const pivot = arr[mid];
    const pivot = arr[low];
 
    // Iterate till start less than end
    while (start < end) {
        while (arr[start] < pivot) {
            start++;
        }
 
        while (arr[end] > pivot) {
            end--;
        }
 
        if (start <= end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }
    // Recursively pass the two subarray as a input
    sortArray(arr, low, end);
    sortArray(arr, start, high);
 
}
 
console.log(AlienLanguage('bacdefghijklmnopqrstuvwzyx', ['bb', 'yb', 'za']));