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

        let charToIndex = new Map();
        for (let i = 0; i < 26; i++) {
            charToIndex.set(String.fromCharCode(65 + i), i);
        }
        let charFrequencies =  new Array(26).fill(0);

        let left = 0;
        let right = 1;

        let maxLength = 0;
        let currentLength = 0;
        let neededReplacements = 0;

        charFrequencies[charToIndex.get(s[0])]++;
        let maxFrequencyIndex = charToIndex.get(s[0]);

        while (right < s.length + 1) {
            currentLength = right - left;
            maxLength = Math.max(currentLength, maxLength);
            charFrequencies[charToIndex.get(s[right])]++;
            //if (charFrequencies[charToIndex.get(s[right])] > charFrequencies[maxFrequencyIndex]) {
            //    maxFrequencyIndex = charToIndex.get(s[right]);
            //}
            let maxFreq = 0;
            let maxFrequencyIndex = -1;
            for (let i = 0; i < 26; i++) {
                if (charFrequencies[i] > maxFreq) {
                    maxFreq = charFrequencies[i];
                    maxFrequencyIndex = i;
                }
            }
            neededReplacements = (currentLength + 1) - charFrequencies[maxFrequencyIndex];
            //console.log(k, neededReplacements);
            if (k < neededReplacements) {
                charFrequencies[charToIndex.get(s[left])]--;
                //console.log(s.slice(left, right), charFrequencies[maxFrequencyIndex], maxLength);
                left++;
                charFrequencies[charToIndex.get(s[right])]--;
            }
            else {
                //console.log(s.slice(left, right), charFrequencies[maxFrequencyIndex], maxLength);
                right++;
            }
        }

        return maxLength;
    }
}
