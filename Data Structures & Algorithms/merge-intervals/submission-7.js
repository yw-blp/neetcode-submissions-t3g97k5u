class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        let min = +Infinity;
        let max = 0;
        for (const interval of intervals) {
            min = Math.min(min, interval[0]);
            max = Math.max(interval[0], max);
        }
        let sortedIntervals = new Array(max - min + 1).fill(null);
        for (const interval of intervals) {
            if (!sortedIntervals[interval[0] - min]) {
                sortedIntervals[interval[0] - min] = interval;
                continue;
            }
            sortedIntervals[interval[0] - min][1] = Math.max(interval[1], sortedIntervals[interval[0] - min][1]);
        }

        //console.log(sortedIntervals);

        let currInterval = sortedIntervals[0];
        let mergedIntervals = [];
        for (const interval of sortedIntervals) {
            if (!interval) {
                continue;
            }
            if (currInterval[0] > interval[1] || currInterval[1] < interval[0]) {
                mergedIntervals.push(currInterval);
                currInterval = interval;
            }
            else {
                currInterval[0] = Math.min(currInterval[0], interval[0]);
                currInterval[1] = Math.max(currInterval[1], interval[1]);
            }
        }
        mergedIntervals.push(currInterval);

        //console.log(mergedIntervals);

        return mergedIntervals;
    }
}
