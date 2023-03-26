
function closestNumbers(arr) {

    // Write your code here

    arr.sort((a, b) => a - b);


    let min = Math.abs(arr[1] - arr[0]);
    let ans = [];

    

    for (let i = 0; i < arr.length - 1; i++) {

        let a = Math.abs(arr[i] - arr[i + 1]);
       
        
        
        if (a < min) {

            ans = [];
            ans.push(arr[i]);
            ans.push(arr[i + 1]);
            min = a;

        } else if ( a === min) {


            ans.push(arr[i]);
            ans.push(arr[i + 1])
        }
       


    }
   

    return ans;



}


const arr = [-20, - 3916237, - 357920, - 3620601, 7374819, - 7330761, 30, 6246457, - 6461594, 266854]


console.log(closestNumbers(arr))