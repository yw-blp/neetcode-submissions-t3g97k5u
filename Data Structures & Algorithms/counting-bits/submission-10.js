class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let firstFiveDigits = new Array(32).fill(0);
        for (let i = 1; i < 32; i++) {
            firstFiveDigits[i] = firstFiveDigits[i >>> 1] + (i & 1);
        }

        firstFiveDigits.splice(n + 1);
        let output = firstFiveDigits;
        for (let i = 32; i <= n; i++) {
            output.push(firstFiveDigits[i >> 5] + firstFiveDigits[i & 31]);
        }

        return output;
    }
}
