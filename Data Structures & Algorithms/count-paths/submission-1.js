class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {

        [m, n] = [Math.min(m, n) - 1, Math.max(m, n) - 1];

        let i = 1;
        let factorial = 1;
        let totalSteps = m + n;
        let mF;
        let totalF;

        while (i <= m) {
            factorial *= i;
            i++;
        }
        mF = factorial;

        i = n + 1;
        factorial = 1;
        while (i <= totalSteps) {
            factorial *= i;
            i++;
        }
        totalF = factorial;

        console.log(totalF, mF);

        return Math.round(totalF / mF);
    }
}
