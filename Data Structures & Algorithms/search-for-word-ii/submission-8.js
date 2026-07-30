class TrieNode {
    constructor(char, prefix) {
        this.char = char;
        this.prefix = prefix;
        this.children = new Map();
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode("", "");
    }

    insert(word) {
        let currentNode = this.root;
        let prefix = "";
        for (const char of word) {
            prefix += char;
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode(char, prefix));
            }
            currentNode = currentNode.children.get(char);
        }
        currentNode.isEnd = true;
    }

    remove(word) {
        let currentNode = this.root;
        let history = [currentNode];
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
            history.push(currentNode);
        }
        if (!currentNode.isEnd) {
            return false;
        }
        currentNode.isEnd = false;
        while (history.length >= 2) {
            currentNode = history.pop();
            if (currentNode.isEnd || currentNode.children.size > 0) {
                return true;
            }
            history[history.length - 1].children.delete(currentNode.char);
        }
        return true;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} wordss
     * @return {string[]}
     */
    findWords(board, words) {
        let validWords = new PrefixTree();
        for (const word of words) {
            validWords.insert(word);
        }

        let foundWords = [];
        function search(currentNode, x, y) {
            currentNode = currentNode.children.get(board[y][x]);

            if (currentNode.isEnd) {
                foundWords.push(currentNode.prefix);
                validWords.remove(currentNode.prefix);
            }

            let revert = board[y][x];
            board[y][x] = "!";

            if (x > 0 && currentNode.children.has(board[y][x - 1])) {
                search(currentNode, x - 1, y);
            }
            if (x < board[y].length - 1 && currentNode.children.has(board[y][x + 1])) {
                search(currentNode, x + 1, y);
            }
            if (y > 0 && currentNode.children.has(board[y - 1][x])) {
                search(currentNode, x, y - 1);
            }
            if (y < board.length - 1 && currentNode.children.has(board[y + 1][x])) {
                search(currentNode, x, y + 1);
            }

            board[y][x] = revert;
        }

        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (validWords.root.children.has(board[y][x])) {
                    search(validWords.root, x, y);
                }
            }
        }

        return foundWords;
    }
}
