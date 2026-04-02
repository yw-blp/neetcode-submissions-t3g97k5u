class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let minSeed = 1;
        let maxSeed = 2147483648;

        for (let i = 0; i < 16; i++) {
            n = (n ^ (((minSeed | maxSeed) >>> 0) & ((((n & minSeed) && 1) ^ ((n & maxSeed) && 1)) * 4294967295))) >>> 0;
            minSeed = (minSeed << 1) >>> 0;
            maxSeed = maxSeed >>> 1;
        }

        return n;
    }
}
