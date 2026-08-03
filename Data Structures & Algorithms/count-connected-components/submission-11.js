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

        let componentsCounter = 0;
        for (let node = 0; node < adjacencyList.length; node++) {
            if (visited[node]) {
                continue;
            }
            visited[node] = true;
            let front = 0;
            let queue = [node];
            while (front < queue.length) {
                const node = queue[front];
                for (const adjacentNode of adjacencyList[node]) {
                    if (!visited[adjacentNode]) {
                        visited[adjacentNode] = true;
                        queue.push(adjacentNode);
                    }
                }
                front++;
            }
            componentsCounter++;
        }

        return componentsCounter;
    }
}
