class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = "";
        for (let i = 0; i < strs.length; i++) {
            for (let j = 0; j < strs[i].length; j++) {
                let num = strs[i].charCodeAt(j);
                if (num <= 15) {
                    encoded_string += "0";
                }
                encoded_string += num.toString(16);
            }
            encoded_string += "fg";
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
        for (let i = 0; i < str.length; i += 2) {
            if (str[i + 1] === "g") {
                strs.push(word);
                word = "";
                continue;
            }
            word += String.fromCharCode(parseInt(str.substring(i, i + 2), 16));
        }
        return strs;
    }
}
