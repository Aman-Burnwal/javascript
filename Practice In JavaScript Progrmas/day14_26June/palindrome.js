function palindrome(myString){

 

    /* Check to see if myString is a Palindrome*/
    var isPalindrome = true;
    var stringLength = myString.length;
    var midPoint = Math.floor(stringLength/2);

    for(var i = 0; i < midPoint; i++){
        if(myString[i] != myString[stringLength - i - 1]){
            isPalindrome = false;
            break;
        }
    }

    if(isPalindrome){
        console.log("The string " + myString + " is a Palindrome");
    }
    else{
        console.log("The string " + myString + " is not a Palindrome");
    }
}
    
    
     
    
    palindrome('madam')