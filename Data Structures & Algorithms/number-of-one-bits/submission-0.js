class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let output = 0;
        while (n > 0) {
            output += n & 1;
            n = n >> 1;
        }
        return output;
    }
}