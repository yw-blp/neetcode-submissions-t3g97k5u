class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        let adjacencyList = Array.from({ length: n }, () => new Set());
        for (const edge of edges) {
            if (edge[0] >= n || edge[1] >= n) {
                return 0;
            }
            adjacencyList[edge[0]].add(edge[1]);
            adjacencyList[edge[1]].add(edge[0]);
        }

        let componentsCounter = 0;
        for (let i = 0; i < adjacencyList.length; i++) {
            if (adjacencyList[i].size <= 0) {
                componentsCounter++;
            }
        }

        for (let i = 0; i < adjacencyList.length; i++) {
            //console.log(adjacencyList);
            if (adjacencyList[i].size <= 0) {
                continue;
            }
            let front = 0;
            let queue = [i];
            while (front < queue.length) {
                for (const adjacentNode of adjacencyList[queue[front]]) {
                    adjacencyList[adjacentNode].delete(queue[front]);
                    queue.push(adjacentNode);
                }
                adjacencyList[queue[front]].clear();
                front++;
            }
            componentsCounter++;
        }

        //console.log(adjacencyList);

        //let i = 0;
        //let queue = [i];
        //while (i < queue.length) {
        //    for (const adjacentNode of adjacencyList[queue[i]]) {
        //        adjacencyList[adjacentNode].delete(queue[i]);
        //        queue.push(adjacentNode);
        //    }
        //    adjacencyList[queue[i]].clear();
        //    i++;
        //}

        //console.log(adjacencyList);
        //for (let i = 0; i < adjacencyList.length; i++) {
        //    if (adjacencyList[i].size > 0) {
        //        for (const adjacentNode of adjacencyList[i]) {
        //            adjacencyList[adjacentNode].delete(i);
        //            adjacencyList[i].delete(adjacentNode);
        //        }
        //        componentsCounter++;
        //    }
        //}

        return componentsCounter;
    }
}
