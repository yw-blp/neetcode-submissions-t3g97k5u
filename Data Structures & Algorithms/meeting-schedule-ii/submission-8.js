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

        let sortedIntervals = [...intervals].sort((a, b) => a.start - b.start);
        let minEnds = new MinPriorityQueue();
        let maxEnds = new MaxPriorityQueue();
        console.log(sortedIntervals);

        minEnds.enqueue(sortedIntervals[0].end);
        //maxEnds.enqueue(sortedIntervals[0].end);
        for (let i = 1; i < sortedIntervals.length; i++) {
            if (sortedIntervals[i].start < minEnds.front()) {
                minEnds.enqueue(sortedIntervals[i].end);
                //maxEnds.enqueue(sortedIntervals[i].end);
            }
            else {
                minEnds.dequeue();
                minEnds.enqueue(sortedIntervals[i].end);
            }
        }

        return minEnds.size();
    }
}
