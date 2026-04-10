class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let max = [0, 0, 1];
        let start;
        let end;

        for (let i = 1; i < s.length; i++) {
            start = i - 1;
            end = i;
            while (start >= 0 && end < s.length) {
                if (s[start] !== s[end]) {
                    break;
                }
                if (end - start + 1 > max[2]) {
                    max[0] = start;
                    max[1] = end;
                    max[2] = end - start + 1;
                }
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
                if (end - start + 1 > max[2]) {
                    max[0] = start;
                    max[1] = end;
                    max[2] = end - start + 1;
                }
                start--;
                end++;
            }
        }

        return s.substring(max[0], max[1] + 1);
    }
}
