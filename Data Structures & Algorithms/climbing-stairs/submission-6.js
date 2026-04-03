class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let first = 0
        let second = 1;
        let current = 1;
        while (n > 1) {
            first = second;
            second = current;
            current = first + second;
            n--;
        }
        return current;
    }
}