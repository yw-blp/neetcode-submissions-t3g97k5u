class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        let islandWidth = heights.length;
        let islandLength = heights[0].length;

        let willFlowToPacific = Array.from({ length: islandWidth }, () => Array(islandLength).fill(false));
        let willFlowToAtlantic = Array.from({ length: islandWidth }, () => Array(islandLength).fill(false));

        function findSourcesToPacific(x, y) {
            if (x > 0 && heights[y][x] <= heights[y][x - 1]) {
                willFlowToPacific[y][x - 1] ||= willFlowToPacific[y][x];
            }
            if (x < islandLength - 1 && heights[y][x] <= heights[y][x + 1]) {
                willFlowToPacific[y][x + 1] ||= willFlowToPacific[y][x];
            }
            if (y > 0 && heights[y][x] <= heights[y - 1][x]) {
                willFlowToPacific[y - 1][x] ||= willFlowToPacific[y][x];
            }
            if (y < islandWidth - 1 && heights[y][x] <= heights[y + 1][x]) {
                willFlowToPacific[y + 1][x] ||= willFlowToPacific[y][x];
            }
        }
        function findSourcesToAtlantic(x, y) {
            if (x > 0 && heights[y][x] <= heights[y][x - 1]) {
                willFlowToAtlantic[y][x - 1] ||= willFlowToAtlantic[y][x];
            }
            if (x < islandLength - 1 && heights[y][x] <= heights[y][x + 1]) {
                willFlowToAtlantic[y][x + 1] ||= willFlowToAtlantic[y][x];
            }
            if (y > 0 && heights[y][x] <= heights[y - 1][x]) {
                willFlowToAtlantic[y - 1][x] ||= willFlowToAtlantic[y][x];
            }
            if (y < islandWidth - 1 && heights[y][x] <= heights[y + 1][x]) {
                willFlowToAtlantic[y + 1][x] ||= willFlowToAtlantic[y][x];
            }
        }

        for (let x = 0; x < islandLength; x++) {
            willFlowToPacific[0][x] = true;
            willFlowToAtlantic[islandWidth - 1][x] = true;
        }
        for (let y = 0; y < islandWidth; y++) {
            willFlowToPacific[y][0] = true;
            willFlowToAtlantic[y][islandLength - 1] = true;
        }

        for (let y = 0; y < islandWidth; y++) {
            for (let x = 0; x < islandLength; x++) {
                findSourcesToPacific(x, y);
            }
        }
        for (let y = islandWidth - 1; y >= 0 ; y--) {
            for (let x = islandLength - 1; x >= 0 ; x--) {
                findSourcesToPacific(x, y);
                findSourcesToAtlantic(x, y);
            }
        }
        for (let y = 0; y < islandWidth; y++) {
            for (let x = 0; x < islandLength; x++) {
                findSourcesToAtlantic(x, y);
            }
        }

        let validCells = [];
        for (let y = 0; y < islandWidth; y++) {
            for (let x = 0; x < islandLength; x++) {
                if (willFlowToPacific[y][x] && willFlowToAtlantic[y][x]) {
                    validCells.push([y, x]);
                }
            }
        }

        //console.log(willFlowToPacific);
        //console.log(willFlowToAtlantic);

        return validCells;
    }
}
[ 1, 2, 3, 4],
[12,13,14, 5],
[11,16,15, 6],
[10, 9, 8, 7]