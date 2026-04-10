class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
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
            return current;
        }

        let counter = 0;
        let product = 1;
        for (let i = 0; i < s.length; i++) {
            if (Number(s[i]) === 0) {
                return 0;
            }
            if (Number(s[i]) > 2) {
                counter++;
                product *= getFibonacci(counter);
                counter = 0;
            }
            if (Number(s[i]) === 2) {
                if (Number(s[i + 1]) === 0) {
                    product *= getFibonacci(counter);
                    counter = 0;
                    i++;
                    continue;
                }
                counter++;
                if (Number(s[i + 1]) > 6) {
                    product *= getFibonacci(counter);
                    counter = 0;
                    i++;
                }
            }
            if (Number(s[i]) < 2) {
                if (Number(s[i + 1]) === 0) {
                    product *= getFibonacci(counter);
                    counter = 0;
                    i++;
                    continue;
                }
                counter++;
            }
        }
        product *= getFibonacci(counter);

        return product;
    }
}
