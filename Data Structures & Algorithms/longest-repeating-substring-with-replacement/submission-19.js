class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        if (s.length <= 1) {
            return s.length;
        }

        let alphabetArray = new Array(26).fill(0);
        let maxCount = 0;
        let index;

        let left = 0;
        let right = 0;
        let current = "";
        let maxLength = 0;
        let neededReplacements = 0;

        while (right < s.length) {
            if (k < neededReplacements) {
                alphabetArray[s.charCodeAt(left) - 65]--;
                left++;
            }
            else {
                alphabetArray[s.charCodeAt(right) - 65]++;
                right++;
                maxLength = Math.max(right - left, maxLength);
            }
            index = s.charCodeAt(right) - 65;
            maxCount = Math.max(maxCount, alphabetArray[index] + 1);
            neededReplacements = (right - left + 1) - maxCount;
        }

        return maxLength;
    }
}
