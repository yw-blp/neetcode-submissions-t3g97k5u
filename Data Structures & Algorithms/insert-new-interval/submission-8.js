class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {

        let start = 0;
        let startInsertLeft = true;
        while (start < intervals.length) {
            let interval = intervals[start];
            if (newInterval[0] < interval[0]) {
                break;
            }
            if (newInterval[0] <= interval[1]) {
                startInsertLeft = false;
                break;
            }
            start++;
        }

        let end = start;
        let endInsertLeft = true;
        while (end < intervals.length) {
            let interval = intervals[end];
            if (newInterval[1] < interval[0]) {
                break;
            }
            if (newInterval[1] <= interval[1]) {
                endInsertLeft = false;
                break;
            }
            end++;
        }

        console.log(start, end);

        if (startInsertLeft && endInsertLeft) {
            intervals.splice(start, end - start, newInterval);
            return intervals;
        }
        if (!startInsertLeft && !endInsertLeft) {
            intervals.splice(start, end - start + 1, [intervals[start][0], intervals[end][1]]);
            return intervals;
        }
        if (!startInsertLeft && endInsertLeft) {
            intervals[start][1] = newInterval[1];
            intervals.splice(start + 1, end - start - 1);
            return intervals;
        }
        if (startInsertLeft && !endInsertLeft) {
            intervals[end][0] = newInterval[0];
            intervals.splice(start, end - start);
            return intervals;
        }

        //console.log(start, end);

        return intervals;
    }
}
