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

        let start = head;
        while (head.next) {
            head = head.next;
        }


        function traverse(node) {
            if (node.next) {
                traverse(node.next);
                node.next = null;
                head.next = node;
                head = head.next;
            }
            else {
                start = node;
                head = node;
            }
        }

        traverse(start);

        console.log(start, head);

        return start;
    }
}
