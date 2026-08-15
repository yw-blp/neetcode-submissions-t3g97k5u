class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        let sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);
        let currInterval = sortedIntervals[0];
        let mergedIntervals = [];
        for (const interval of sortedIntervals) {
            if (currInterval[1] < interval[0]) {
                mergedIntervals.push(currInterval);
                currInterval = interval;
            }
            else {
                currInterval[1] = Math.max(currInterval[1], interval[1]);
            }
        }
        mergedIntervals.push(currInterval);

        return mergedIntervals;
    }
}
