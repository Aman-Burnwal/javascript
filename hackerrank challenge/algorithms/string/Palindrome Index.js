function palindromeIndex(s) {

    for (let i = 0, j = s.length - 1; i < j; i++, j--) {

        if (s[i] !== s[j]) {

            if (isPalindrome(s, i + 1, j)) {

                return i;

            } else if (isPalindrome(s, i, j - 1)) {

                return j;
                
            } else {

                return -1;
            }
        }
    }
    return -1;
}

function isPalindrome(s, i, j) {
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}



console.log(palindromeIndex("abcbaef"))