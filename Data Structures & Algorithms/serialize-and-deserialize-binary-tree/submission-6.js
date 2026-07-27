/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) {
            return "";
        }

        let queue = [root];
        for (const node of queue) {
            if (node) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        while (!queue[queue.length - 1]) {
            queue.pop();
        }

        let data = "";
        for (const node of queue) {
            data += (node) ? `${node.val},` : "_";
        }

        return data;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let stringNum = "";
        let queue = [];
        for (const s of data) {
            if (s === ",") {
                queue.push(new TreeNode(Number(stringNum)));
                stringNum = "";
                continue;
            }
            if (s === "_") {
                queue.push(null);
                continue;
            }
            stringNum += s;
        }

        if (queue.length === 0) {
            return null;
        }
        
        let rootIndex = 0;
        let nodeIndex = 1;
        while (nodeIndex < queue.length) {
            if (queue[rootIndex]) {
                queue[rootIndex].left = queue[nodeIndex++] ?? null;
                queue[rootIndex].right = queue[nodeIndex++] ?? null;
            }
            rootIndex++;
        }

        return queue[0];
    }
}
