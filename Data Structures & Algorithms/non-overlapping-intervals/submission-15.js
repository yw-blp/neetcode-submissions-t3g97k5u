class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {

        let sortedIntervals = structuredClone(intervals).sort((a, b) => a[1] - b[1]);

        function calculateOverlaps(arr, target) {
            let left = 0;
            let right = arr.length;
            while (left < right) {
                let mid = (left + right) >> 1;
                if (arr[mid][1] <= target) {
                    left = mid + 1;
                } 
                else {
                    right = mid;
                }
            }
            return arr.length - left;
        }

        let nonOverlappingIntervals = [];
        for (const interval of sortedIntervals) {
            if (calculateOverlaps(nonOverlappingIntervals, interval[0]) > 0) {

            }
            else {
                nonOverlappingIntervals.push(interval);
            }
        }

        return intervals.length - nonOverlappingIntervals.length;
    }
}
