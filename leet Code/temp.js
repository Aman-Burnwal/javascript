function palindrome(number) {
    
    // smallest number of digits
    let starting_number = Math.pow(10, number - 1)
    // biggest number of digits
    let ending_number = Math.pow(10, number) - 1;

    // printing our palindrome using loop 
    // this loop help to itterata over every number / digits
    for (starting_number; starting_number <= ending_number; starting_number++) {

        // default 1 - 9 is palindrome
        if (starting_number <= 9) {
            // printing the number
            console.log(starting_number)
            // no need to go lower code so it will jump to next itteration
            continue;
        } 

        // calling our ispalindrome function to check palindrome
        if (isPalindrome(starting_number)) {
            // printing the number
            console.log(starting_number)
        }
    }

}

// to check number is palindrome or not
function isPalindrome(num) {
    let org = num;
    let rev = 0;

    // it will reverse the number
    while (num >= 0) {
        // getting reminder and saving it as a reverse number
        rev = (rev * 10) + Math.floor(num % 10);
        // removing reminders
        num = Math.floor(num / 10);

        // adding last number in reverse number
        if (num <= 9) {
            rev = (rev * 10) + num;
            break;
        }

        
    }

    // cheacking is reverse number and orignal number is equal or not
    return rev == org;
}

// calling our function
palindrome(2);



