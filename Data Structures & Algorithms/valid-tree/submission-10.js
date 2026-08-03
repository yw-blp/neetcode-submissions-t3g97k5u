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

        let adjacentNodes = Array.from({ length: n }, () => new Set());

        for (const edge of edges) {
            //console.log(adjacentNodes, edge);
            adjacentNodes[edge[0]].add(edge[1]);
            adjacentNodes[edge[1]].add(edge[0]);
        }
        console.log(adjacentNodes);
        console.log();

        let i = 0;
        let queue = [0];
        let visitedNodes = new Set();
        while (i < queue.length) {
            //console.log(queue, i);
            //console.log(adjacentNodes);
            //console.log();
            //if (visitedNodes.has(queue[i])) {
            //    return false;
            //}
            //visitedNodes.add(queue[i]);
            //console.log(visitedNodes);
            for (const adjacentNode of adjacentNodes[queue[i]]) {
                adjacentNodes[adjacentNode].delete(i);
                queue.push(adjacentNode);
            }
            adjacentNodes[queue[i]].clear();
            i++;
        }

        for (const node of adjacentNodes) {
            if (node.size > 0) {
                return false;
            }
        }

        return true;
    }
}
