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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    var ans = [];

    preOrder(root, ans);
    return ans;

};

function preOrder(root, ans) {
    if (!root) return;

    ans.push(root.val);
    preOrder(root.left, ans);
    preOrder(root.right, ans)
}