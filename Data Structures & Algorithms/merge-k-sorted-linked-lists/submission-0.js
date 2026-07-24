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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {

        function merge(list1, list2) {
            let ans = new ListNode();
            const ansRef = ans;
            while (list1 != null || list2 != null) {
                if (list1 == null) {
                    ans.next = list2;
                    break;
                }
                if (list2 == null) {
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
                else {
                    ans.next = new ListNode(list1.val);
	        		ans = ans.next;
                    ans.next = new ListNode(list2.val);
	        		ans = ans.next;
                    list1 = list1.next;
                    list2 = list2.next;
                }
            }
            return ansRef.next;
        }

        while (lists.length !== 1) {
            lists.push(merge(lists.pop(), lists.pop()));
        }

        return lists[0];
    }
}
