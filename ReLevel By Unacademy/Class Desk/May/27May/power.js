function sum(num1, num2) {
    ans = 1;
    for(let i = 1; i <= num2; i++) {
        ans = num1 * ans;
    }
    return console.log(ans);
}

sum(2, 3);