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
            ["{", "}"],
            [")", false],
            ["]", false],
            ["}", false]
        ]);
        for (let i = 0; i < s.length; i++) {
            current = counterparts.get(s[i]);
            if (!current) {
                if (array.pop() != s[i]) {
                    return false;
                }
            }
            else {
                array.push(current);
            }
        }
        return (array.length == 0);
    }
}
