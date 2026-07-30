
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = new MinPriorityQueue();
        for (let i = 0; i < nums.length; i++) {
            minHeap.enqueue(nums[i]);
            if (i >= k) {
                minHeap.dequeue();
            }
        }
        return minHeap.front();
    }
}
