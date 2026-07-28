class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char);
        }
        currentNode.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }
        return currentNode.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let currentNode = this.root;
        for (const char of prefix) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }
        return true;
    }
}
