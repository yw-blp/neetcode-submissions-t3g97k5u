class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let letterFrequency = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            letterFrequency[s.charCodeAt(i) - 97]++;
        }
        for (let i = 0; i < t.length; i++) {
            letterFrequency[t.charCodeAt(i) - 97]--;
        }
        for (let i = 0; i < letterFrequency.length; i++) {
            if (letterFrequency[i] !== 0) {
                return false;
            }
        }
        return true;
    }
}
