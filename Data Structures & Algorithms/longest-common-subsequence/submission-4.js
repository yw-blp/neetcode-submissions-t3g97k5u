class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        function binarySearchLeftInsert(arr, target) {
            let left = 0;
            let right = arr.length;
            while (left < right) {
                let mid = (left + right) >> 1;
                if (arr[mid] < target) {
                    left = mid + 1;
                } 
                else {
                    right = mid;
                }
            }
            return left;
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

        // longest increasing subsequence subproblem
        let tails = [];
        let replaceIndex;
        for (const occurenceIndexes of text1CharOccurences) {
            for (const occurenceIndex of occurenceIndexes) {
                replaceIndex = binarySearchLeftInsert(tails, occurenceIndex);
                if (replaceIndex < tails.length) {
                    tails[replaceIndex] = occurenceIndex;
                    continue;
                }
                tails.push(occurenceIndex);
            }
        }

        return tails.length;
    }
}
