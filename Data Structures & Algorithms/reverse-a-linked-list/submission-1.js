/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) {
            return null;
        }

        if (!head.next) {
            return head;
        }

        let prev = null;
        let next = null;
        while (head.next) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        head.next = prev;
        prev = head;

        return prev;
    }
}
