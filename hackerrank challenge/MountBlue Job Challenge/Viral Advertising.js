function viralAdvertising(n) {
    // Write your code here

    let liked = 2;
    let communicate = 2;

    let shared = 5;
    for (let i = 2; i <= n; i++) {

        shared = liked * 3;
        liked = Math.floor(shared / 2);
        communicate += liked


    }

    return communicate;

}