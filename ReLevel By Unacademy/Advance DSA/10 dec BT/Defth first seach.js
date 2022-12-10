/**
 * 1. pre order
 * 2. post order
 * 3. in order
 */



// inOrder 
        // left, root, right
function inOrder(root, ans) {
    if (!root) return;

    inOrder(root.left, ans);// left
    ans.push(root.val); // root
    inOrder(root.right, ans) // right
}

// pre order 
        // root , left, right

function preOrder(root, ans) {
    if (!root) return;

    ans.push(root.val);// root

    preOrder(root.left, ans);// left
    preOrder(root.right, ans)// right
}

// post order
        // left, right, root

function postOrder(root, ans) {
    
    if (!root) return;

    postOrder(root.left, ans);// left
    postOrder(root.right, ans);// right
    ans.push(root.val)// root
}