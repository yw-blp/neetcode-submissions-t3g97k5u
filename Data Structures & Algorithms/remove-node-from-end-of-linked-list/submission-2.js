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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        if (!head.next) {
            return null;
        }

        if (!head.next.next) {
            if (n === 1) {
                head.next = null;
                return head;
            }
            return head.next
        }

        head = new ListNode(0, head);
        let counter = 0;
        function traverse(node) {
            if (node.next) {
                traverse(node.next);
            }
            if (counter === n) {
                node.next = node.next.next;
            }
            counter++;
        }

        traverse(head);

        return head.next;
    }
}
