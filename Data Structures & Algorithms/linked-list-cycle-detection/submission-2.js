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
     * @return {boolean}
     */
    hasCycle(head) {

        if (!head) {
            return false;
        }

        let start = null;
        if (head.next) {
            start = head;
        }
        
        let prev = null;
        let next = null;
        while (head.next) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }

        if (start === head) {
            return true;
        }

        return false;
    }
}
