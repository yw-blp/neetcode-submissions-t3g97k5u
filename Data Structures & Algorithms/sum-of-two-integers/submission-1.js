class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        function fullAdder(addend, carry) {
            //let endValue = 4294967295;
            //console.log(addend.toString(2), carry.toString(2));
            if (carry === 0) { 
                return addend ^ carry;
            }
            return fullAdder(addend ^ carry, (addend & carry) << 1);
        }
        return fullAdder(a, b);
    }
}
