class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let alt = new Map();
        let output = [];
        let outputIndex = 0;

        for (let i = 0; i < strs.length; i++) {
            temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let x = 0; x < strs[i].length; x++) {
                temp[strs[i].charCodeAt(x) - 97]++;
            }
            temp = temp.join();
            if (alt.get(temp) >= 0) {
                output[alt.get(temp)].push(strs[i]);
            }
            else {
                alt.set(temp, outputIndex);
                output.push([]);
                outputIndex++;
                output[alt.get(temp)].push(strs[i]);
            }
        }
        return output;
    }
}
