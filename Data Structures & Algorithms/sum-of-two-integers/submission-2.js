class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        function fullAdder(addend, carry) {
            if (carry === 0) { 
                return addend ^ carry;
            }
            return fullAdder(addend ^ carry, (addend & carry) << 1);
        }
        return fullAdder(a, b);
    }
}
