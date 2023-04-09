function lonelyinteger(a) {
    // Write your code here
    let ans = 0;
    for (let i = 0; i < a.length; i++) {

        ans = ans ^ a[i];
    }

    return ans;

}