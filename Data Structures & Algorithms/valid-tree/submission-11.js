class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) {
            return false;
        }

        let adjacencyList = Array.from({ length: n }, () => new Set());
        for (const edge of edges) {
            adjacencyList[edge[0]].add(edge[1]);
            adjacencyList[edge[1]].add(edge[0]);
        }

        let i = 0;
        let queue = [0];
        while (i < queue.length) {
            for (const adjacentNode of adjacencyList[queue[i]]) {
                adjacencyList[adjacentNode].delete(i);
                queue.push(adjacentNode);
            }
            adjacencyList[queue[i]].clear();
            i++;
        }

        for (const adjacentNodes of adjacencyList) {
            if (adjacentNodes.size > 0) {
                return false;
            }
        }

        return true;
    }
}
