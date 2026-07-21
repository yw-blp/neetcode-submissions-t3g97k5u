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

        function FindMaxFrequency(str) {
            let alphabetArray = new Array(26).fill(0);
            let maxCount = 0;
            let index;
            for (const c of str) {
                index = c.charCodeAt(0) - 65;
                alphabetArray[index]++;
                if (alphabetArray[index] > maxCount) {
                    maxCount = alphabetArray[index];
                }
            }
            return maxCount;
        }

        let left = 0;
        let right = 0;
        let current = "";
        let maxLength = 0;
        let neededReplacements = 0;

        while (right < s.length) {
            if (k < neededReplacements) {
                left++;
            }
            else {
                right++;
            }
            maxLength = Math.max(right - left, maxLength);
            current = s.substring(left, right + 1);
            neededReplacements = current.length - FindMaxFrequency(current);
        }

        return maxLength;
    }
}
