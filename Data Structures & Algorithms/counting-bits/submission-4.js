class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let firstFiveDigits = [
            0, 1, 1, 2, 1, 2, 2, 3,
            1, 2, 2, 3, 2, 3, 3, 4,
            1, 2, 2, 3, 2, 3, 3, 4,
            2, 3, 3, 4, 3, 4, 4, 5
        ];

        function bitCounter(num) {
            return firstFiveDigits[num >> 5] + firstFiveDigits[num & 31];
        }

        let output = new Array(n + 1).fill(0);
        while (n >= 0) {
            output[n] = bitCounter(n);
            n--;
        }

        return output;
    }
}
