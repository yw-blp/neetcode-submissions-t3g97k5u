class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {

        function binarySwap(leftIndex, rightIndex, binaryValue) {
            let leftBit = (1 << leftIndex) >>> 0;
            let rightBit = (1 << rightIndex) >>> 0;
            //console.log(leftBit.toString(2), rightBit.toString(2));
            return (binaryValue ^ (((leftBit | rightBit) >>> 0) & ((((binaryValue & leftBit) && 1) ^ ((binaryValue & rightBit) && 1)) * 4294967295))) >>> 0;
        }

        for (let i = 0; i < 16; i++) {
            n = binarySwap(31 - i, i, n);
        }

        return n;
    }
}
