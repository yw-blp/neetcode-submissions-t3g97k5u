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
     * @return {void}
     */
    reorderList(head) {
        
        if (!head.next) {
            return head;
        }

        let start = head;
        let temp;
        function traverse(node) {
            if (node.next) {
                traverse(node.next);
                if (head.next) {
                    temp = node.next;
                    node.next = null;
                    temp.next = head.next;
                    head.next = temp;
                    //console.log(node.val,head);
                    head = head.next.next;
                }
            }
        }

        traverse(head.next);

        return start;

    }
}
