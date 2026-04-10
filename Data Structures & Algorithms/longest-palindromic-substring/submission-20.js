class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let max = [0, 0, 1];

        let start = (s.length >>> 1) - 1;
        let counter = 0;
        for (let i = s.length >>> 1; i < s.length; i++) {
            if (start < 0 || s[start] !== s[i]) {
                start = i - 1;
                counter = 0;
            }
            if (s[start] !== s[i]) {
                start++;
                continue;
            }
            counter += 2;
            if (counter > max[2]) {
                max[0] = start;
                max[1] = i;
                max[2] = counter;
            }
            start--;
        }

        start = (s.length >>> 1) - 2;
        counter = 1;
        for (let i = s.length >>> 1; i < s.length; i++) {
            if (start < 0 || s[start] !== s[i]) {
                start = i - 2;
                counter = 1;
            }
            if (s[start] !== s[i]) {
                start++;
                continue;
            }
            counter += 2;
            if (counter > max[2]) {
                max[0] = start;
                max[1] = i;
                max[2] = counter;
            }
            start--;
        }

        start = 0;
        counter = 0;
        for (let i = 1; i < s.length; i++) {
            if (start < 0 || s[start] !== s[i]) {
                start = i - 1;
                counter = 0;
            }
            if (s[start] !== s[i]) {
                start++;
                continue;
            }
            counter += 2;
            if (counter > max[2]) {
                max[0] = start;
                max[1] = i;
                max[2] = counter;
            }
            start--;
        }

        start = 0;
        counter = 1;
        for (let i = 2; i < s.length; i++) {
            if (start < 0 || s[start] !== s[i]) {
                start = i - 2;
                counter = 1;
            }
            if (s[start] !== s[i]) {
                start++;
                continue;
            }
            counter += 2;
            if (counter > max[2]) {
                max[0] = start;
                max[1] = i;
                max[2] = counter;
            }
            start--;
        }

        console.log(max);
        console.log(s);
        console.log(s.substring(max[0], max[1] + 1));
        return s.substring(max[0], max[1] + 1);
    }
}
