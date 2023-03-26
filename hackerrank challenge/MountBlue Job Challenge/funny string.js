
function funnyString(s) {
  
    if (s.length % 2 !== 0) return "Not Funny"
    let arr = [];

    for (let i = 0; i < s.length; i++) {

        let char = s.charCodeAt(i) - 97;

        arr.push(char);

    }

    let min = Math.abs(arr[0] - arr[arr.length - 1]);

  

    for (let i = 1; i < arr.length / 2; i++) {

        let diff = Math.abs(arr[i] - arr[i - 1]);
        let revDiff = Math.abs(arr[arr.length - i] - arr[arr.length - i - 1]);
        if (diff !== revDiff) {
            return "Not Funny";
        }
            

    }

    return "Funny";

}


console.log(funnyString("acxz"));