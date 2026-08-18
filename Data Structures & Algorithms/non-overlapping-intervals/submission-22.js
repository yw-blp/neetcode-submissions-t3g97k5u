class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {

        let sortedIntervals = [...intervals].sort((a, b) => a[1] - b[1]);

        let maxEnd = sortedIntervals[0][1];
        let overlaps = 0;
        for (let i = 1; i < sortedIntervals.length; i++) {
            if (sortedIntervals[i][0] < maxEnd) {
                overlaps++;
            }
            else {
                maxEnd = sortedIntervals[i][1];
            }
        }

        return overlaps;
    }
}
