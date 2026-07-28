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
    search(word, root = this.root) {
        let currentNode = root;
        //console.log(word);
        for (let i = 0; i < word.length; i++) {
            if (word[i] === ".") {
                //console.log(word);
                let isAnyEnd = false;
                for (const node of currentNode.children.values()) {
                    isAnyEnd = (isAnyEnd || this.search(word.slice(i + 1), node));
                    if (isAnyEnd) {break;}
                }
                return isAnyEnd;
            }
            if (!currentNode.children.has(word[i])) {
                return false;
            }
            currentNode = currentNode.children.get(word[i]);
        }
        return currentNode.isEnd;
    }
}
