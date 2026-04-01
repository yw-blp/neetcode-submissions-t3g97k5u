class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
        let left = 0;
        let max = 1;

        if (s.length == 0) {
            return 0;
        }
        
        let charMap = new Map();

        for (let right = 0; right < s.length; right++) {
            if (charMap.has(s[right])) {
                left = Math.max(charMap.get(s[right]) + 1, left);
            }
            charMap.set(s[right], right);
            console.log(right, left);
            max = Math.max(right - left + 1, max);
        }

        return max;
    }
}