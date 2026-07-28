class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
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
    search(word, start = 0, root = this.root) {
        let currentNode = root;
        for (let i = start; i < word.length; i++) {
            if (word[i] === ".") {
                for (const node of currentNode.children.values()) {
                    if (this.search(word, i + 1, node)) {
                        return true;
                    }
                }
                return false;
            }
            if (!currentNode.children.has(word[i])) {
                return false;
            }
            currentNode = currentNode.children.get(word[i]);
        }
        return currentNode.isEnd;
    }
}
