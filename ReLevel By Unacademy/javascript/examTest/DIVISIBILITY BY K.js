function divisibilityByK(arr, n, k) {

    let total = 0;

   
    let ans = 0;

    for (let i = 0; i < arr.length; i++) {

        total += arr[i];

        if (total % k === 0) {
            total = 0;
            continue;

        }

        let temp = total + 1;

        if (temp % k === 0) {
            ans++;
            total = 0;
            continue;
        }

        temp = total - 1;

        if (temp % k === 0) {
            ans++;
            total = 0;
            continue;
        }
        
    }

    return ans;

}
