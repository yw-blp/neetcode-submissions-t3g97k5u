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

        for (let x = 0; x < islandLength; x++) {
            willFlowToPacific[0][x] = true;
            willFlowToAtlantic[islandWidth - 1][x] = true;
        }
        for (let y = 0; y < islandWidth; y++) {
            willFlowToPacific[y][0] = true;
            willFlowToAtlantic[y][islandLength - 1] = true;
        }

        function flowFromPacificWaters(x, y) {
            if (x > 0 && heights[y][x] <= heights[y][x - 1]) {
                if (!willFlowToPacific[y][x - 1]) {
                    willFlowToPacific[y][x - 1] = true;
                    flowFromPacificWaters(x - 1, y);
                }
            }
            if (x < islandLength - 1 && heights[y][x] <= heights[y][x + 1]) {
                if (!willFlowToPacific[y][x + 1]) {
                    willFlowToPacific[y][x + 1] = true;
                    flowFromPacificWaters(x + 1, y);
                }
            }
            if (y > 0 && heights[y][x] <= heights[y - 1][x]) {
                if (!willFlowToPacific[y - 1][x]) {
                    willFlowToPacific[y - 1][x] = true;
                    flowFromPacificWaters(x, y - 1);
                }
            }
            if (y < islandWidth - 1 && heights[y][x] <= heights[y + 1][x]) {
                if (!willFlowToPacific[y + 1][x]) {
                    willFlowToPacific[y + 1][x] = true;
                    flowFromPacificWaters(x, y + 1);
                }
            }
        }
        function flowFromAtlanticWaters(x, y) {
            if (x > 0 && heights[y][x] <= heights[y][x - 1]) {
                if (!willFlowToAtlantic[y][x - 1]) {
                    willFlowToAtlantic[y][x - 1] = true;
                    flowFromAtlanticWaters(x - 1, y);
                }
            }
            if (x < islandLength - 1 && heights[y][x] <= heights[y][x + 1]) {
                if (!willFlowToAtlantic[y][x + 1]) {
                    willFlowToAtlantic[y][x + 1] = true;
                    flowFromAtlanticWaters(x + 1, y);
                }
            }
            if (y > 0 && heights[y][x] <= heights[y - 1][x]) {
                if (!willFlowToAtlantic[y - 1][x]) {
                    willFlowToAtlantic[y - 1][x] = true;
                    flowFromAtlanticWaters(x, y - 1);
                }
            }
            if (y < islandWidth - 1 && heights[y][x] <= heights[y + 1][x]) {
                if (!willFlowToAtlantic[y + 1][x]) {
                    willFlowToAtlantic[y + 1][x] = true;
                    flowFromAtlanticWaters(x, y + 1);
                }
            }
        }

        for (let x = 0; x < islandLength; x++) {
            flowFromPacificWaters(x, 0);
            flowFromAtlanticWaters(x, islandWidth - 1);
        }
        for (let y = 0; y < islandWidth; y++) {
            flowFromPacificWaters(0, y);
            flowFromAtlanticWaters(islandLength - 1, y);
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
