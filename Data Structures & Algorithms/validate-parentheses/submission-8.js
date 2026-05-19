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
            //["(", false],
            //["[", false],
            //["{", false]
        ]);
        for (let i = 0; i < s.length; i++) {
            if (counterparts.has(s[i])) {
                if (array[array.length - 1] != counterparts.get(s[i])) {
                    return false;
                }
                array.pop();
            }
            else {
                array.push(s[i]);
            }
        }
        return (array.length == 0);
    }
}
