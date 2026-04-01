class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
        let left = -1;
        let max = 0;

        if (s.length == 0) {
            return 0;
        }
        
        let charMap = new Map();

        for (let right = 0; right < s.length; right++) {
            if (charMap.has(s[right])) {
                left = Math.max(charMap.get(s[right]), left);
            }
            charMap.set(s[right], right);
            max = Math.max(right - left, max);
        }

        return max;
    }
}