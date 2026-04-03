class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let first = 0
        let second = 0;
        let current = 1;
        while (n > 0) {
            first = second;
            second = current;
            current += first;
            n--;
        }
        return current;
    }
}