class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = "";
        for (let i = 0; i < strs.length; i++) {
            encoded_string += strs[i].length.toString().padStart(3, 0);
            for (let j = 0; j < strs[i].length; j++) {
                encoded_string += strs[i].charCodeAt(j).toString().padStart(3, 0);
            }
        }
        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];
        let word = "";
        let i = 0;
        let length = 0;
        while (i < str.length) {
            length = parseInt(str.substring(i, i + 3));
            for (let j = 0; j < length; j++) {
                i += 3;
                word += String.fromCharCode(parseInt(str.substring(i, i + 3)));
            }
            strs.push(word);
            word = "";
            i += 3;
        }
        return strs;
    }
}
