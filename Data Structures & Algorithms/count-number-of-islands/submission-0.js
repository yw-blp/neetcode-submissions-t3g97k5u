class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let numIslands = 0;

        function exploreIsland(x, y) {
            if (grid[y][x] !== "1") {
                return;
            }

            //let revert = grid[y][x];
            grid[y][x] = "!";

            if (x > 0) {
                exploreIsland(x - 1, y);
            }
            if (x < grid[y].length - 1) {
                exploreIsland(x + 1, y);
            }
            if (y > 0) {
                exploreIsland(x, y - 1);
            }
            if (y < grid.length - 1) {
                exploreIsland(x, y + 1);
            }

            //grid[y][x] = revert;
        }

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                if (grid[y][x] === "1") {
                    numIslands++;
                    exploreIsland(x, y);
                }
            }
        }

        return numIslands;
    }
}
