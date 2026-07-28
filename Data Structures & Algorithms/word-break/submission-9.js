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

    findValidPrefixIndexes(word, start = 0) {
        let validPrefixIndexes = [];
        let currentNode = this.root;
        for (let i = start; i <= word.length; i++) {
            if (currentNode.isEnd) {
                validPrefixIndexes.push(i);
            }
            if (!currentNode.children.has(word[i])) {
                return validPrefixIndexes;
            }
            currentNode = currentNode.children.get(word[i]);
        }
        return validPrefixIndexes;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        if (s.length === 0) {
            return true;
        }

        let validWords = new PrefixTree();
        for (const word of wordDict) {
            validWords.insert(word);
        }

        let isReachable = new Array(s.length + 1).fill(false);
        isReachable[0] = true;
        for (let i = 0; i < s.length; i++) {
            if (!isReachable[i]) {
                continue;
            }
            let validPrefixIndexes = validWords.findValidPrefixIndexes(s, i);
            for (const index of validPrefixIndexes) {
                isReachable[index] = true;
            }
        }
        
        return isReachable[s.length];
    }
}
