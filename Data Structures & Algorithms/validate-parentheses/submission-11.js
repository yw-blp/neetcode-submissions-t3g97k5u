class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let array = [];
        let current;
        let counterparts = new Map([
            [")", "("],
            ["]", "["],
            ["}", "{"],
            ["(", false],
            ["[", false],
            ["{", false]
        ]);
        for (let i = 0; i < s.length; i++) {
            current = counterparts.get(s[i]);
            if (current) {
                if (array.pop() != current) {
                    return false;
                }
            }
            else {
                array.push(s[i]);
            }
        }
        return (array.length == 0);
    }
}
