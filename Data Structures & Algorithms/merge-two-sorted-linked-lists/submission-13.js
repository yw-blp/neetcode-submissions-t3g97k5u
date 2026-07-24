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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head = new ListNode();
        const start = head;
        let node;
        while (true) {
            if (!list1) {
                head.next = list2;
                break;
            }
            if (!list2) {
                head.next = list1;
                break;
            }
            if (list1.val <= list2.val) {
                node = list1;
                list1 = list1.next;
                node.next = null;
                head.next = node;
	    		head = head.next;
            }
            else {
                node = list2;
                list2 = list2.next;
                node.next = null;
                head.next = node;
	    		head = head.next;
            }
        }
        return start.next;
    }
}
