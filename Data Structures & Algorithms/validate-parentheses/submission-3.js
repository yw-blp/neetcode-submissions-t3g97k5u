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
            ["}", "{"]
        ]);
        for (let i = 0; i < s.length; i++) {
            current = counterparts.get(s[i]);
            if (counterparts.has(s[i])) {
                if (array.pop() != counterparts.get(s[i])) {
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
