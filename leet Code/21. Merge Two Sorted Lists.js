// question link:-        https://leetcode.com/problems/merge-two-sorted-lists/



/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
 */







// solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */                   
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    if (list1.length === 0) return list2;

    if (list2.length === 0) return list1

    let i = 0, j = 0;
    let arr = [];

    while (i < list1.length && j < list2.length) {

        

        if (list1[i] >= list2[j]) {
      
            arr.push(list2[j])
            j++;

        } else {
            arr.push(list1[i])
            i++;
        }

    }

    while (i < list1.length ) {
        arr.push(list1[i]);
        i++;

    }
    while (j < list2.length ) {
        arr.push(list2[j]);
        j++;

    }
    return arr;
};

const list1 = [1, 2,3], list2 = [0]

console.log(mergeTwoLists(list1, list2))
