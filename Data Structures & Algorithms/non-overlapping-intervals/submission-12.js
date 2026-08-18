class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {

        let sortedIntervals = structuredClone(intervals).sort((a, b) => a[1] - b[1]);
        //console.log(sortedIntervals);
        
        let i = 0;
        let filteredIntervals = [];
        let overlaps = 0;
        while (i < sortedIntervals.length) {
            let currentHighest = sortedIntervals[i];
            let currentValue = sortedIntervals[i][1];
            while (i < sortedIntervals.length && sortedIntervals[i][1] === currentValue) {
                if (sortedIntervals[i][0] === sortedIntervals[i][1]) {
                    filteredIntervals.push(sortedIntervals[i]);
                }
                if (sortedIntervals[i][0] > currentHighest[0]) {
                    currentHighest = sortedIntervals[i];
                }
                overlaps++;
                i++;
            }
            overlaps--;
            if (currentHighest[0] !== currentHighest[1]) {
                filteredIntervals.push(currentHighest);
            }
        }
        console.log(filteredIntervals);

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
        for (const interval of filteredIntervals) {
            if (calculateOverlaps(nonOveralappingIntervals, interval[0]) > 0) {
                console.log(nonOveralappingIntervals, calculateOverlaps(nonOveralappingIntervals, interval[0]));
                overlaps++;
            }
            else {
                nonOveralappingIntervals.push(interval);
            }
        }

        //let temp = [];
        //for (const [i, interval] of filteredIntervals.entries()) {
        //    temp.push(calculateOverlaps(filteredIntervals, interval[0], 0, i));
        //}
        //console.log(temp, overlaps);

        //for (let i = 0; i < temp.length; i++) {
        //    if (temp[i] < 0) {
        //        if (temp[i + temp[i]] < 0) {
        //            temp[i + temp[i]] = 0;
        //            temp[i] = 0;
        //            continue;
        //        }
        //        overlaps++;
        //    }
        //}

        return overlaps;

    }
}
