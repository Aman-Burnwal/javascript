/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

    let ans = [];

    call(root, ans);

    ans.sort((a, b) => a - b);
    console.log(ans);
    return ans[k - 1];


};


function call(root, ans) {


    if (!root.left && !root.right) return ans.push(root.val);
    ans.push(root.val)

    if (root.left) call(root.left, ans);
    if (root.right) call(root.right, ans);


}