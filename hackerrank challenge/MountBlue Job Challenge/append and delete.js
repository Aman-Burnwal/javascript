function appendAndDelete(s, t, k) {
    // Write your code here

    let i = 0, j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            break;
        }
    }

    let left =  (s.length - i ) + (t.length - j );
    



   if (k >= left && (k - left) % 2 === 0 || k >= s.length + t.length) {
        return "Yes";
    } else {
        return "No";
    }
}


console.log(appendAndDelete("ashley", "ash", 2))        //NO
console.log(appendAndDelete("hackerhappy", "hackerrank", 9)) // YES