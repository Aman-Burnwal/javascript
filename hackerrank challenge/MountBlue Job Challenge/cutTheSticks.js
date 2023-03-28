
function cutTheSticks(arr) {

    // Write your code here

    let min = Math.min(...arr);

    let ans = [];
    console.log(min)

    while (arr.length) {

        let temp = [];
        let newMin = Infinity;
        ans.push(arr.length);

        for (let i = 0; i < arr.length; i++) {

            let value = arr[i] - min;
            if (value > 0) {

                temp.push(value)

                if (value < newMin) newMin = value;

            }

        }
        
        arr = temp;
        min = newMin;
        console.log(ans, arr)
    }

    console.log(ans)

    return ans;


}


console.log(cutTheSticks([4, 2, 4, 3, 6, 8]))