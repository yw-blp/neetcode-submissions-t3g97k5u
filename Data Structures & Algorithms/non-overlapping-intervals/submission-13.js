class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {

        let sortedIntervals = structuredClone(intervals).sort((a, b) => a[1] - b[1]);
        
        let i = 0;
        let filteredIntervals = [];
        let overlaps = 0;

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

        let nonOveralappingIntervals = [];
        for (const interval of sortedIntervals) {
            if (calculateOverlaps(nonOveralappingIntervals, interval[0]) > 0) {
                overlaps++;
            }
            else {
                nonOveralappingIntervals.push(interval);
            }
        }

        return overlaps;
    }
}
