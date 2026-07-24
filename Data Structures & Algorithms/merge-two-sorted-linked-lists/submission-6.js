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
        let ans = new ListNode();
        const ansRef = ans;
        while (list1 || list2) {
            if (!list1) {
                ans.next = list2;
                break;
            }
            if (!list2) {
                ans.next = list1;
                break;
            }
            if (list1.val <= list2.val) {
                ans.next = new ListNode(list1.val);
	    		ans = ans.next;
                list1 = list1.next;
            }
            else if (list1.val > list2.val) {
                ans.next = new ListNode(list2.val);
	    		ans = ans.next;
                list2 = list2.next;
            }
        }
        return ansRef.next;
    }
}
