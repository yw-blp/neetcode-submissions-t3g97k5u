class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = [];
        for (let i = 0; i < strs.length; i++) {
            s.push(strs[i].length.toString().padStart(3,0) + strs[i]);
        }
        return s.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];
        let i = 0;
        let length = 0;
        while (i < str.length) {
            length = parseInt(str.substring(i, i + 3));
            i += 3;
            strs.push(str.substring(i, i + length));
            i += length;
        }
        return strs;
    }
}
