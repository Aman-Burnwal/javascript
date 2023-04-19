/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    //iterative solution

    // let subsets = [[]];


    // for (let i = 0; i < nums.length; i++) {

    //     let temp = [...subsets];
    //     // console.log(subsets);

    //     for (let j = 0; j < subsets.length; j++) {

    //         let t = [...subsets[j]];

    //         t.push(nums[i]);
            
    //         temp.push([...t]);
    //         // console.log(temp)

    //     }
    //     // console.log(temp)
    //     subsets = temp;
    // }

    // return subsets;


    let ans = [];


    solve(nums, 0, [], ans);
    
    return ans;


};


function solve(nums, index, Output, ans) {
    
    if (index >= nums.length) {
        ans.push(Output);
        return;
    }

    solve(nums, index + 1, [...Output], ans);
    Output.push(nums[index]);

    solve(nums, index + 1,[...Output], ans)
}

console.log(subsets([1, 2, 3]))