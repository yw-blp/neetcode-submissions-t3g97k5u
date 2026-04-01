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

        firstFiveDigits.splice(n + 1);
        let output = firstFiveDigits;
        for (let i = 32; i <= n; i++) {
            output.push(firstFiveDigits[i >> 5] + firstFiveDigits[i & 31]);
        }

        return output;
    }
}
