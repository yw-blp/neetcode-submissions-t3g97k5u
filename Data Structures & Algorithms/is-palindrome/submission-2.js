class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        for (let i = 0; i < s.length >>> 1; i++) {
            if (s[i] !== s[(s.length - 1) - i]) {
                return false;
            }
        }
        return true;
    }
}
