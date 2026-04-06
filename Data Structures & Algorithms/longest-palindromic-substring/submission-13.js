class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let reverse = [];
        for (let i = 0; i < s.length; i++) {
            reverse.push();
        }
        
        let counter = 0;
        let nearestEndpoint = s.length - 1;
        let previousEndpoint = s.length - 1;
        let max = [0, 0, 0];
        for (let i = 0; i < s.length; i++) {
            let start = i;
            nearestEndpoint = s.length - 1;
            previousEndpoint = s.length - 1;
            for (let j = s.length - 1; j >= i; j--) {
                //console.log("important", start, j);
                if (i === 0 && j === 4) {
                    //console.log(i, start, j, "start");
                }
                if (i === 0 && start === 0 && j === 4) {
                    //console.log(i, start, j, "working?");
                }
                if (j - start <= 0) {
                    if (j === start) {
                        counter++;
                    }
                    if (counter > max[2]) {
                        max[0] = i;
                        max[1] = i + counter;
                        max[2] = counter;
                    }
                    counter = 0;
                    break;
                }
                if (s[i] === s[j] && nearestEndpoint === previousEndpoint) {
                    nearestEndpoint = j;
                    //console.log(i, j, previousEndpoint, nearestEndpoint, "yes");
                }
                if (s[start] === s[j]) {
                    counter += 2;
                    start++;
                }
                else {
                    if (i !== start && nearestEndpoint !== previousEndpoint) {
                        //console.log("redirected to", nearestEndpoint, "from", previousEndpoint);
                        j = nearestEndpoint + 1;
                        previousEndpoint = nearestEndpoint;
                        //console.log(previousEndpoint, nearestEndpoint);
                    }
                    counter = 0;
                    start = i;
                }
            }
        }

        //console.log(max);
        
        return s.substring(max[0], max[1]);
    }
}
