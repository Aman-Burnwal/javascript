function palindrome(a) {
    let b = a.toUpperCase();
    for (let i = b.length; i >= 0; i--) {
        // console.log(b[i]);

        if (b[i] != b[b.length - i - 1]) {
            c = "its not palindrome";
            break;
        }
        else {
            c = "its a palindrome";
        }

    }
    console.log(c);
}

palindrome("abcba");

