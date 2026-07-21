class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        //const tMap = new Map();
        //for (let i = 0; i < t.length; i++) {
        //    if (!tMap.has(s[i])) {
        //        tMap.set(s[i], [0]);
        //    }
        //    tMap.get(s[i])[0]++;
        //}

        function containsString() {
            let tempMap = structuredClone(charMap);
            for (const c of t) {
                if (!tempMap.has(c) || tempMap.get(c)[0] <= 0) {
                    return false;
                }
                tempMap.get(c)[0]--;
            }
            //console.log("good");
            return true;
        }

        let charMap = new Map();
        let left = 0;
        let right = 0;
        let current = [0, +Infinity];

        while (right < s.length + 1) {
            //console.log(s.substring(left, right));
            if (containsString()) {
                //console.log("yes", current[1] - current[0], right - left);
                if (current[1] - current[0] > right - left) {
                    current = [left, right];
                }
                charMap.get(s[left])[0]--;
                left++;
                continue;
            }

            if (!charMap.has(s[right])) {
                charMap.set(s[right], [0]);
            }
            charMap.get(s[right])[0]++;
            right++;
        }

        //console.log(current);

        if (s.length < current[1]) {
            return "";
        }

        return s.substring(current[0], current[1]);
    }
}
