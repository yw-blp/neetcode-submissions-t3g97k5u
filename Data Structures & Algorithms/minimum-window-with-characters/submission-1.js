class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        let charMap = new Map();
        //const tSet = new Set(t);

        for (const c of t) {
            if (!charMap.has(c)) {
                charMap.set(c, [0]);
            }
            charMap.get(c)[0]++;
        }

        let left = 0;
        let right = 0;
        let currentValid = 0;
        let current = [0, +Infinity];

        while (right < s.length + 1) {
            if (currentValid === t.length) {
                if (current[1] - current[0] > right - left) {
                    current = [left, right];
                }
                if (charMap.has(s[left])) {
                    charMap.get(s[left])[0]++;
                    if (charMap.get(s[left])[0] > 0) {
                        currentValid--;
                    }
                }
                left++;
                continue;
            }

            if (charMap.has(s[right])) {
                if (charMap.get(s[right])[0] > 0) {
                    currentValid++;
                }
                charMap.get(s[right])[0]--;
            }
            right++;
        }

        if (s.length < current[1]) {
            return "";
        }

        return s.substring(current[0], current[1]);
    }
}
