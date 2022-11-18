/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let start = head, end = head;
    let i = 1;
    while (end && end.next && end.next.next) {
        start = start.next;
        end = end.next.next;

    }

    if (end.next) return start.next
    return start

};