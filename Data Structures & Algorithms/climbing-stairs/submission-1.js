class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n === 1) {
            return 1;
        }

        function factorial(x) {
            let ans = 1;
            if (x == 0) {
                return 1;
            }
            while (x > 1) {
                ans *= x;
                x--;
            }
            return ans;
        }
        function combination(n, r) {
            return factorial(n) / (factorial(r) * factorial(n - r));
        }

        function yeah(n, r, final) {
            if (r === 0) {
                return (final + 1);
            }
            final += combination(n, r);
            if (r === 1) {
                return final;
            }
            return yeah(n - 1, r - 2, final);
        }

        return yeah(n - 1, n - 2, 1);
    }
}