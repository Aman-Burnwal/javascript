function palindrome(myString) {

    let myString1 = myString.toLowerCase();

    /* Check to see if myString is a Palindrome*/

    let removeChar = true
    let checkPalindrome = true;

    for (let i = 0; i < myString1.length / 2; i++) {
        if (myString1[i] != myString1[myString1.length - i - 1]) {
            checkPalindrome = false;

        }
    }



    if (removeChar === checkPalindrome) {



        console.log(myString + " is a Palindrome");

    } else {



        console.log(myString + " is not a Palindrome");

    }

}



palindrome('Madam');
palindrome('Star Wars');
palindrome('2,3,4,3,2');

