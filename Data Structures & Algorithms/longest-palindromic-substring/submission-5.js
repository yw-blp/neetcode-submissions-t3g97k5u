class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let max = [0, 0, 0];
        let counter = [0, 0, 0];

        for (let i = 0; i < s.length - 1; i++) {
            for (let j = s.length - 1; j > i; j--) {
                //console.log(i, j);
                if (s[i] !== s[j]) {
                    continue;
                }
                let start = i;
                let end = j;
                counter[0] = start;
                counter[1] = end;
                counter[2] += 2;
                start++;
                end--;
                while (end - start > 0 && s[start] === s[end]) {
                    counter[2] += 2;
                    start++;
                    end--;
                }
                if (end - start === 0) {
                    counter[2]++;
                }
                //console.log(end, start);
                if (end - start > 1) {
                    counter[2] = 0;
                }
                //console.log(max, counter);
                if (max[2] < counter[2]) {
                    [max, counter] = [counter, max];
                }
                counter[0] = 0;
                counter[1] = 0;
                counter[2] = 0;
            }
        }
        
        //console.log(max);

        return s.substring(max[0], max[1] + 1);
    }
}
