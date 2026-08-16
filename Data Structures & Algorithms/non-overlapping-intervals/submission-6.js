class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {

        let sortedIntervals = structuredClone(intervals).sort((a, b) => a[0] - b[0]);
        //console.log(sortedIntervals);

        let i = 0;
        let filteredIntervals = [];
        let overlaps = 0;
        while (i < sortedIntervals.length) {
            let currentLowest = sortedIntervals[i];
            let currentValue = sortedIntervals[i][0];
            while (i < sortedIntervals.length && sortedIntervals[i][0] === currentValue) {
                if (sortedIntervals[i][0] === sortedIntervals[i][1]) {
                    filteredIntervals.push(sortedIntervals[i]);
                }
                if (sortedIntervals[i][1] < currentLowest[1]) {
                    currentLowest = sortedIntervals[i];
                }
                overlaps++;
                i++;
            }
            overlaps--;
            if (currentLowest[0] !== currentLowest[1]) {
                filteredIntervals.push(currentLowest);
            }
        }
        //console.log(filteredIntervals);

        function calculateOverlaps(arr, target, start, end) {
            let left = start;
            let right = end + 1;
            while (left < right) {
                let mid = (left + right) >> 1;
                if (arr[mid][0] < target) {
                    left = mid + 1;
                } 
                else {
                    right = mid;
                }
            }
            return left - start;
        }

        let temp = [];
        for (const [i, interval] of filteredIntervals.entries()) {
            //console.log(interval, i);
            temp.push(calculateOverlaps(filteredIntervals, interval[1], i + 1, filteredIntervals.length - 1));
        }
        //console.log(temp);

        for (let i = filteredIntervals.length - 1; i >= 0; i--) {
            //console.log(filteredIntervals);
            //console.log(calculateOverlaps(filteredIntervals, filteredIntervals[i][1], i + 1, filteredIntervals.length - 1), i);
            if (calculateOverlaps(filteredIntervals, filteredIntervals[i][1], i + 1, filteredIntervals.length - 1) > 0) {
                filteredIntervals.splice(i, 1);
                overlaps++;
            }
        }
        return overlaps;
    }
}
