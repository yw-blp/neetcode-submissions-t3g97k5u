class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        let adjacencyList = Array.from({ length: n }, () => new Set());
        for (const [node1, node2] of edges) {
            if (node1 >= n || node2 >= n) {
                return 0;
            }
            adjacencyList[node1].add(node2);
            adjacencyList[node2].add(node1);
        }

        let componentsCounter = 0;
        for (let i = 0; i < adjacencyList.length; i++) {
            if (adjacencyList[i].size <= 0) {
                componentsCounter++;
            }
        }

        for (let i = 0; i < adjacencyList.length; i++) {
            if (adjacencyList[i].size <= 0) {
                continue;
            }
            let queue = new Set([i]);
            for (const adjacentNodesIdx of queue) {
                for (const adjacentNode of adjacencyList[adjacentNodesIdx]) {
                    adjacencyList[adjacentNode].delete(adjacentNodesIdx);
                    queue.add(adjacentNode);
                }
                adjacencyList[adjacentNodesIdx].clear();
            }
            //while (front < queue.length) {
            //    for (const adjacentNode of adjacencyList[queue[front]]) {
            //        adjacencyList[adjacentNode].delete(queue[front]);
            //        queue.push(adjacentNode);
            //    }
            //    adjacencyList[queue[front]].clear();
            //    front++;
            //}
            componentsCounter++;
        }

        return componentsCounter;
    }
}
