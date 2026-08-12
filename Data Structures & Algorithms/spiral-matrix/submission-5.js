class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let n = matrix.length;
        let m = matrix[0].length;
        let matrixArea = n * m;
        let spiralArray = [];

        let topBorder = 0;
        let rightBorder = m - 1;
        let bottomBorder = n - 1;
        let leftBorder = 0;

        while (spiralArray.length < matrixArea) {
            for (let x = leftBorder; x <= rightBorder; x++) {
                spiralArray.push(matrix[topBorder][x]);
            }
            topBorder++;
            for (let y = topBorder; y <= bottomBorder; y++) {
                spiralArray.push(matrix[y][rightBorder]);
            }
            rightBorder--;

            if (spiralArray.length >= matrixArea) {
                break;
            }

            for (let x = rightBorder; x >= leftBorder; x--) {
                spiralArray.push(matrix[bottomBorder][x]);
            }
            bottomBorder--;
            for (let y = bottomBorder; y >= topBorder; y--) {
                spiralArray.push(matrix[y][leftBorder]);
            }
            leftBorder++;
        }

        return spiralArray;
    }
}
