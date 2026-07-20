class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        function Water(x1, x2) {
            return Math.min(heights[x1], heights[x2]) * (x2 - x1);
        }

        let left = 0;
        let right = heights.length - 1;
        let max = Water(left, right);
        let tempLeft;
        let tempRight;

        while (left !== right) {
            tempLeft = Water(left + 1, right);
            tempRight = Water(left, right - 1);
            if (heights[right] > heights[left]) {
                if (tempLeft > max) {
                    max = tempLeft;
                }
                left++;
            }
            else {
                if (tempRight > max) {
                    max = tempRight;
                }
                right--;
            }
        }

        return max;
    }
}
