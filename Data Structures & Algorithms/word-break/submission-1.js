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

    searchValidWordLengths(word, start = 0) {
        let validWordLengths = [];
        let currentNode = this.root;
        for (let i = start; i <= word.length; i++) {
            if (currentNode.isEnd) {
                validWordLengths.push(i - start);
            }
            if (!currentNode.children.has(word[i])) {
                return validWordLengths;
            }
            currentNode = currentNode.children.get(word[i]);
        }
        return validWordLengths;
    }

    findAllValidWordLengths(word) {
        let validWordLengths = [];
        for (let i = 0; i < word.length; i++) {
            validWordLengths.push(this.searchValidWordLengths(word, i));
        }
        return validWordLengths;
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
        let validWordLengths = validWords.findAllValidWordLengths(s); // lengths of valid words in each index of s

        //console.log(validWordLengths);

        let index = 0;
        let indexTraversalHistory = [0];
        while (index < s.length && indexTraversalHistory.length > 0) {
            //console.log(indexTraversalHistory);
            if (validWordLengths[index].length <= 0) {
                index = indexTraversalHistory.pop();
                continue;
            }
            indexTraversalHistory.push(index);
            index += validWordLengths[index].pop();
        }
        //console.log(index, s.length);
        return (index === s.length);
    }
}
