class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let array = [];
        let current;
        let counterparts = new Map([
            ["(", ")"],
            ["[", "]"],
            ["{", "}"]
        ]);
        for (let i = 0; i < s.length; i++) {
            if (array[array.length - 1] === s[i]) {
                array.pop();
            }
            else {
                if (counterparts.has(s[i])) {
                    array.push(counterparts.get(s[i]));
                }
                else {
                    return false;
                }
            }
        }
        return (array.length == 0);
    }
}
