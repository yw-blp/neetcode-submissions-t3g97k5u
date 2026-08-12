class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let n = matrix.length;

        for (let y = 0; y < n; y++) {
            for (let x = y + 1; x < n; x++) {
                let temp = matrix[y][x];
                matrix[y][x] = matrix[x][y];
                matrix[x][y] = temp;
            }
        }

        for (let y = 0; y < n; y++) {
            for (let x = 0; x < (n >> 1); x++) {
                let temp = matrix[y][x];
                matrix[y][x] = matrix[y][(n - 1) - x];
                matrix[y][(n - 1) - x] = temp;
            }
        }
    }
}