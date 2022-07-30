for (let i = 2; i <= 200; i++) {
    a = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            a = false;
            break;
        }
    }
    a === true ? console.log(i, " is prime") : console.log(i, " is not prime");
}