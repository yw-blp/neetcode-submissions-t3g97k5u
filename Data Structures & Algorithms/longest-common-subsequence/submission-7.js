class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        if (text1.length < text2.length) {
            [text1, text2] = [text2, text1];
        }

        const n = text1.length;
        const m = text2.length;
        let currRowContents = new Array(m + 1).fill(0);

        for (let row = 1; row <= n; row++) {
            let upperLeftCellContent = 0;
            for (let col = 1; col <= m; col++) {
                let upperCellContent = currRowContents[col];
                if (text1[row - 1] === text2[col - 1]) {
                    currRowContents[col] = upperLeftCellContent + 1;
                }
                else {
                    currRowContents[col] = Math.max(currRowContents[col - 1], currRowContents[col]);
                }
                upperLeftCellContent = upperCellContent;
            }
        }

        return currRowContents[currRowContents.length - 1];
    }
}
