class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let start;
        let end;
        let counter = s.length;

        for (let i = 1; i < s.length; i++) {
            start = i - 1;
            end = i;
            while (start >= 0 && end < s.length) {
                if (s[start] !== s[end]) {
                    break;
                }
                counter++;
                start--;
                end++;
            }
        }

        for (let i = 2; i < s.length; i++) {
            start = i - 2;
            end = i;
            while (start >= 0 && end < s.length) {
                if (s[start] !== s[end]) {
                    break;
                }
                counter++;
                start--;
                end++;
            }
        }

        return counter;
    }
}
