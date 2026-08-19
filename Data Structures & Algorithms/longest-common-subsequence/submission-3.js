class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        if (text1.length > text2.length) {
            [text1, text2] = [text2, text1];
        }

        function binarySearchLeftInsert(arr, low, high, target) {
            if (low === high) {
                return low;
            }
            let mid = (low + high) >> 1;
            if (arr[mid] < target) {
                return binarySearchLeftInsert(arr, mid + 1, high, target);
            }
            else {
                return binarySearchLeftInsert(arr, low, mid, target);
            }
        }

        let charToIndex = new Map();
        let text1CharOccurences = Array.from({ length: text1.length }, () => null);
        for (let i = 0; i < text1.length; i++) {
            if (!charToIndex.has(text1[i])) {
                charToIndex.set(text1[i], i);
                text1CharOccurences[i] = [];
            }
            else {
                text1CharOccurences[i] = text1CharOccurences[charToIndex.get(text1[i])];
            }
        }

        for (let i = text2.length - 1; i >= 0; i--) {
            if (charToIndex.has(text2[i])) {
                text1CharOccurences[charToIndex.get(text2[i])].push(i);
            }
        }
        console.log(text1CharOccurences);

        // longest increasing sequence
        let tails = [];
        //let tailsOrigin = [];
        let replaceIndex;
        for (const [i, occurenceIndexes] of text1CharOccurences.entries()) {
            console.log(tails);
            for (const occurenceIndex of occurenceIndexes) {
                replaceIndex = binarySearchLeftInsert(tails, 0, tails.length, occurenceIndex);
                if (replaceIndex >= tails.length) {
                    tails.push(occurenceIndex);
                }
                else {
                    tails[replaceIndex] = occurenceIndex;
                }
            }
        }
        console.log(tails);
        console.log(text1CharOccurences);

        let LISLength = tails.length;

        return LISLength;
    }
}
