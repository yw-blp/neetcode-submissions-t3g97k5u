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
        if (data.length === 0) {
            return null;
        }

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
        
        let parentIndex = 0;
        let childIndex = 1;
        while (childIndex < queue.length) {
            if (queue[parentIndex]) {
                queue[parentIndex].left = queue[childIndex++] ?? null;
                queue[parentIndex].right = queue[childIndex++] ?? null;
            }
            parentIndex++;
        }

        return queue[0];
    }
}
