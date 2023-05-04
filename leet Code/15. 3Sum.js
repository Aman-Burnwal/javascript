/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    let map = new Map();
    let ans2 = new Map();



    for (i of nums) map[i] = (map[i] || 0) + 1;

    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        
        map[nums[i]]--;

        
        for (let j = i + 1; j < nums.length; j++) {

            map[nums[j]]--;
            let sum = -(nums[i] + nums[j]);


            if (map[sum] && map[sum] > 0) {

                let temp = [];

                console.log(map)

                temp.push(nums[i]);
                temp.push(nums[j]);
                temp.push(sum);
                
                let sort = temp.sort((a, b) => a - b);

                sort = "" + sort[0] + sort[1] + sort[2]
                
                if (!ans2.has(sort)) ans.push(temp);
                ans2.set(sort);


            }
            nums
            map[nums[j]]++;

        }
        // map[i]++;
    }
    return ans;

};


console.log(threeSum([1, 2, -2, -1]))