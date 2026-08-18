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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        if (intervals.length <= 1) {
            return true;
        }

        let sortedIntervals = [...intervals].sort((a, b) => a.start - b.start);
        for (let i = 1; i < sortedIntervals.length; i++) {
            if (sortedIntervals[i].start < sortedIntervals[i - 1].end) {
                return false;
            }
        }

        return true;
    }
}
