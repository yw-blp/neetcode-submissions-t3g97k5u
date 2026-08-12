class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let n = matrix.length;
        let m = matrix[0].length;

        function setRowToZeroes(row) {
            for (let col = 0; col < m; col++) {
                matrix[row][col] = 0;
            }
        }
        function setColToZeroes(col) {
            for (let row = 0; row < n; row++) {
                matrix[row][col] = 0;
            }
        }

        let topRowHasZero = false;
        let leftColHasZero = false;
        for (let row = 0; row < n; row++) {
            if (matrix[row][0] === 0) {
                topRowHasZero = true;
                break;
            }
        }
        for (let col = 0; col < m; col++) {
            if (matrix[0][col] === 0) {
                leftColHasZero = true;
                break;
            }
        }

        for (let row = 1; row < n; row++) {
            for (let col = 1; col < m; col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][0] = 0;
                    matrix[0][col] = 0;
                }
            }
        }

        for (let row = 1; row < n; row++) {
            if (matrix[row][0] === 0) {
                setRowToZeroes(row);
            }
        }
        for (let col = 1; col < m; col++) {
            if (matrix[0][col] === 0) {
                setColToZeroes(col);
            }
        }
        
        if (topRowHasZero) {
            setColToZeroes(0);
        }
        if (leftColHasZero) {
            setRowToZeroes(0);
        }
    }
}
