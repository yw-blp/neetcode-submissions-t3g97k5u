class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        //let temp = 0;
        //for (let i = 0; i < s.length; i++) {
        //    if (s[i] === "1" || s[i] === "2") {
        //        temp++;
        //    }
        //}
        //console.log(56, temp);

        let validLengths = [];
        let counter = 0;
        for (let i = 0; i < s.length; i++) {
            if (Number(s[i]) === 0) {
                return 0;
            }
            if (Number(s[i]) > 2) {
                counter++;
                validLengths.push(counter);
                counter = 0;
            }
            if (Number(s[i]) === 2) {
                if (Number(s[i + 1]) === 0) {
                    validLengths.push(counter);
                    validLengths.push(1);
                    counter = 0;
                    i++;
                    continue;
                }
                counter++;
                if (Number(s[i + 1]) > 6) {
                    validLengths.push(counter);
                    validLengths.push(1);
                    counter = 0;
                    i++;
                    continue;
                }
            }
            if (Number(s[i]) < 2) {
                if (Number(s[i + 1]) === 0) {
                    validLengths.push(counter);
                    validLengths.push(1);
                    counter = 0;
                    i++;
                    continue;
                }
                counter++;
            }
        }
        validLengths.push(counter);

        //console.log(validLengths);

        let first;
        let second;
        let current;
        for (let i = 0; i < validLengths.length; i++) {
            first = 0;
            second = 0;
            current = 1;
            while (validLengths[i] > 0) {
                first = second;
                second = current;
                current += first;
                validLengths[i]--;
            }
            validLengths[i] = current;
        }

        //console.log(validLengths);

        let product = 1;
        for (let i = 0; i < validLengths.length; i++) {
            product *= validLengths[i];
        }

        return product;
    }
}
