function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function primeNumbersInRange(range) {
    let primeNumber = new Array();
    for (let i = 2; i <= range; i++) {
        if (isPrime(i) == true) {
            primeNumber.push(i);
        }

    }

    return primeNumber;
}




var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Enter your number here ', (num) => {
    console.log(primeNumbersInRange(parseInt(num)));
    rl.close();
});

