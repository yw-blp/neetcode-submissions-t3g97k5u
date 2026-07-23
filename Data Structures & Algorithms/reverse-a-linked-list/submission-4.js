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

        let reversedList = null;
        let next = null;
        while (head.next) {
            next = head.next;
            head.next = reversedList;
            reversedList = head;
            head = next;
        }
        head.next = reversedList;
        reversedList = head;

        return reversedList;
    }
}
