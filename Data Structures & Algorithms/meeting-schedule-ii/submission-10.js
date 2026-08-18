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

        let sortedIntervals = [...intervals].sort((a, b) => a.start - b.start);
        let minEnds = new MinPriorityQueue();

        minEnds.enqueue(sortedIntervals[0].end);
        for (let i = 1; i < sortedIntervals.length; i++) {
            if (sortedIntervals[i].start >= minEnds.front()) {
                minEnds.dequeue();
            }
            minEnds.enqueue(sortedIntervals[i].end);
        }

        return minEnds.size();
    }
}
