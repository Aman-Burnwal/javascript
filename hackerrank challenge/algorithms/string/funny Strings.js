
function funnyString(s) {
    // Write your code here
    let arr = [];

    for (let i = 0; i < s.length; i++) {

        let charCode = s.charCodeAt(i);
        arr.push(charCode);
    }



    for (let i = 0; i < arr.length - 1; i++) {

        let a = Math.abs(arr[i] - arr[i + 1]);
        let b = Math.abs(arr[arr.length - i - 1] - arr[arr.length - i - 2]);

        if (a !== b) return "Not Funny"
    }

    return "Funny";
}