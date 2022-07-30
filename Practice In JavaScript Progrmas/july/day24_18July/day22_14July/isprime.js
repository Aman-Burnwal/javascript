function isPrime(num) {
    if(num === 1 || num === 0) {
        return false;
    }

    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    
    return true;


}

function sumOfPrime(num) {
    for(let i = 2; i <= Math.floor(num / 2); i++) {
        if(isPrime(i) === true && isPrime(num - i) === true) {
            console.log(i, num - i)
            return;
        }
    }
    return console.log("Not found");

}

sumOfPrime(11);