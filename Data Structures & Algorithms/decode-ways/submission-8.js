class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let counter = 0;
        let product = 1;
        for (let i = 0; i < s.length; i++) {
            if (Number(s[i]) === 0) {
                return 0;
            }
            if (Number(s[i]) > 2) {
                counter++;
                getFibonacci(counter)
            }
            if (Number(s[i]) === 2) {
                if (Number(s[i + 1]) === 0) {
                    getFibonacci(counter)
                    i++;
                    continue;
                }
                counter++;
                if (Number(s[i + 1]) > 6) {
                    getFibonacci(counter)
                    i++;
                }
            }
            if (Number(s[i]) < 2) {
                if (Number(s[i + 1]) === 0) {
                    getFibonacci(counter)
                    i++;
                    continue;
                }
                counter++;
            }
        }
        getFibonacci(counter);

        function getFibonacci(n) {
            let first = 0;
            let second = 0;
            let current = 1;
            while (n > 0) {
                first = second;
                second = current;
                current += first;
                n--;
            }
            product *= current;
            counter = 0;
        }

        return product;
    }
}
