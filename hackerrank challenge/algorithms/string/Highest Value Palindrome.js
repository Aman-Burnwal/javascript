// function highestValuePalindrome(s, n, k) {


//     const S = new Array(n).fill(0);
//     let arr = [];
    
//     let maxVal = '9';
//     console.log(s)

//     for (let i = 0; i < n / 2; i++) {

//         if (s[i] !== s[n - i - 1]) {
            
//             let max = Math.max(Number(s[i], Number(s[n - i - 1])));

//             S[i] = String(max);

//             S[n - i - 1] = String(max);
//             arr.push(true);

//             k--;

//         }
//         else {
//             S[i] = s[i];
//             S[n - i - 1] = s[n - i - 1];
//             arr.push(false);
//         }
//     }

//     if (k < 0) return -1;

//     let left = 0;
//     let right = n - 1;
//     console.log(s, k, arr)

//     while (left <= right) {
        
//         if (arr[left] && S[left] !== maxVal && k > 0) {
            
//             S[left] = maxVal;
//             S[right] = maxVal;
//             k--;

//         } else if (S[left] !== maxVal && k >= 2) {

//             S[left] = maxVal;
//             S[right] = maxVal;
//             k-= 2;
//         } else if (left === right && S[left] !== maxVal) {
//             S[left] = maxVal;
//         }
//         left++;
//         right--;

//         if (k === 0) break;
//     }

//     return S.join("");


function highestValuePalindrome(s, n, k) {
    // Write your code here

    s = s.split("");
    let arr = [];

    let maxVal = '9';
    console.log(s)

    for (let i = 0; i < n / 2; i++) {

        if (s[i] !== s[n - i - 1]) {

            let max = Math.max(Number(s[i], Number(s[n - i - 1])));

            s[i] = String(max);

            s[n - i - 1] = String(max);
            arr.push(true);

            k--;

        }
        else arr.push(false);
    }

    if (k < 0) return -1;
    if (k === 0) return s.join("")

    let left = 0;
    let right = n - 1;
    console.log(s)

    while (left <= right) {

        if (arr[left] && s[left] !== maxVal && k > 0) {

            s[left] = maxVal;
            s[right] = maxVal;
            k--;

        } else if (s[left] !== maxVal && k >= 2) {

            s[left] = maxVal;
            s[right] = maxVal;
            k -= 2;
        } else if (left === right && s[left] !== maxVal) {
            s[left] = maxVal;
        }
        left++;
        right--;

        if (k === 0) break;
    }

    return s.join("");

}
// }



console.log(highestValuePalindrome("5", 1, 1))
