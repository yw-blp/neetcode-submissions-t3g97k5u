class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = "";
        for (let i = 0; i < strs.length; i++) {
            for (let j = 0; j < strs[i].length; j++) {
                encoded_string += strs[i].charCodeAt(j).toString().padStart(3, 0);
            }
            encoded_string += "00f";
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
        for (let i = 0; i < str.length; i += 3) {
            if (str[i + 2] === "f") {
                strs.push(word);
                word = "";
                continue;
            }
            word += String.fromCharCode(parseInt(str.substring(i, i + 3)));
        }
        return strs;
    }
}
