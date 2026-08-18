/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {

        if (intervals.length === 0) {
            return 0;
        }
        if (intervals.length === 1) {
            return 1;
        }

        function binarySearchMaxValidEnd(arr, target) {
            let left = 0;
            let right = arr.length;
            while (left < right) {
                let mid = (left + right) >> 1;
                if (arr[mid] <= target) {
                    left = mid + 1;
                } 
                else {
                    right = mid;
                }
            }
            return left - 1;
        }

        let sortedIntervals = [...intervals].sort((a, b) => a.end - b.end);
        let minEnds = [];
        //console.log(sortedIntervals);

        minEnds.push(sortedIntervals[0].end);
        for (let i = 1; i < sortedIntervals.length; i++) {
            if (sortedIntervals[i].start < minEnds[0]) {
                minEnds.push(sortedIntervals[i].end);
                continue;
            }

            let targetIndex = binarySearchMaxValidEnd(minEnds, sortedIntervals[i].start);
            minEnds.push(sortedIntervals[i].end);
            minEnds.splice(targetIndex, 1); 
            //minEnds[targetIndex] = sortedIntervals[i].end;
            //console.log(minEnds);
            //console.log(minEnds[targetIndex]);
        }

        return minEnds.length;
    }
}
