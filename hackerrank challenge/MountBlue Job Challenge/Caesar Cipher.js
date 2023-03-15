function caesarCipher(s, k) {
    // Write your code here
    let ans = ""

    k = k % 26;

    for (let i = 0; i < s.length; i++) {

        let tempCode = s.charCodeAt(i);


        if ((tempCode <= 122 && tempCode >= 97)) {

            tempCode += k;
            if (tempCode > 122) tempCode -= 26;

        } else if (tempCode >= 65 && tempCode <= 90) {

            tempCode += k;
            if (tempCode > 90) tempCode -= 26;

        }
        ans += String.fromCharCode(tempCode);

    }

    return ans;
}