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
 * @return {number[][]}
 */
var levelOrder = function (root) {

    // console.log(root);
    let result = [];
    let queue = [];
    let currentLevel = [];
    let nextLevel = [];
    let currentLevelValues = [];
    let nextLevelValues = [];
    let isEven = false;
    let isOdd = false;
    let isRoot = true;
    let isLeft = false;
    let isRight = false;

    if (!root) {
        return [];
    }

    if (!root.left && !root.right) {
        return [[root.val]];
    }

    if (root.left) {
        // console.log('root.left: ', root.left);
        queue.push(root.left);
        nextLevel.push(root.left);
        nextLevelValues.push(root.left.val);
    }

    if (root.right) {
        // console.log('root.right: ', root.right);
        queue.push(root.right);
        nextLevel.push(root.right);
        nextLevelValues.push(root.right.val);
    }

    // console.log('queue: ', queue);
    // console.log('nextLevel: ', nextLevel);
    // console.log('nextLevelValues: ', nextLevelValues);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        currentLevel.push(currentNode);
        currentLevelValues.push(currentNode.val);

        // console.log('currentNode: ', currentNode);
        // console.log('currentLevel: ', currentLevel);
        // console.log('currentLevelValues: ', currentLevelValues);

        if (currentNode.left) {
            // console.log('currentNode.left: ', currentNode.left);
            queue.push(currentNode.left);
            nextLevel.push(currentNode.left);
            nextLevelValues.push(currentNode.left.val);
        }

        if (currentNode.right) {
            // console.log('currentNode.right: ', currentNode.right);
            queue.push(currentNode.right);
            nextLevel.push(currentNode.right);
            nextLevelValues.push(currentNode.right.val);
        }

        // console.log('queue: ', queue);
        // console.log('nextLevel: ', nextLevel);
        // console.log('nextLevelValues: ', nextLevelValues);

        if (currentLevel.length === 1 && isRoot) {
            result.push([currentNode.val]);
            isRoot = false;
        } else if (currentLevel.length === 1 && !isRoot) {
            result.push(currentLevelValues);
        }

        if (currentLevel.length === nextLevel.length) {
            //

            if (isEven) {
                result.push(currentLevelValues.reverse());
                isEven = false;
                isOdd = true;
            } else if (isOdd) {
                result.push(currentLevelValues);
                isOdd = false;
                isEven = true;
            } else {
                result.push(currentLevelValues);
                isOdd = true;
            }

            currentLevel = [];
            currentLevelValues = [];
            nextLevel = [];
            nextLevelValues = [];
        }
    }

    return result;

    

};