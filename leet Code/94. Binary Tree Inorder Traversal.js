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

function inOrder(root, ans) {
    if (!root) return;

    inOrder(root.left, ans);
    ans.push(root.val);
    inOrder(root.right, ans)
}

var inorderTraversal = function (root) {

    var ans = [];

    inOrder(root, ans);
    return ans;


};