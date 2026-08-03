class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        let adjacencyList = Array.from({ length: n }, () => []);
        let visited = new Array(n).fill(false);

        for (const [node1, node2] of edges) {
            if (node1 >= n || node2 >= n) {
                return 0;
            }
            adjacencyList[node1].push(node2);
            adjacencyList[node2].push(node1);
        }

        console.log(adjacencyList);

        let componentsCounter = 0;
        for (let node = 0; node < adjacencyList.length; node++) {
            if (visited[node]) {
                continue;
            }
            componentsCounter++;
            visited[node] = true;
            let queue = new Set([node]);
            for (const node of queue) {
                for (const adjacentNode of adjacencyList[node]) {
                    if (!visited[adjacentNode]) {
                        visited[adjacentNode] = true;
                        queue.add(adjacentNode);
                    }
                }
            }
        }

        return componentsCounter;
    }
}
