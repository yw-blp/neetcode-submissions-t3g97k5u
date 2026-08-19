class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        
        let letterOrdering = new Map();
        let reverseLetterOrdering = new Map();

        for (let i = 1; i < words.length; i++) {
            let letterOrder = [];
            let minWordLength = Math.min(words[i - 1].length, words[i].length);
            for (let j = 0; j < minWordLength; j++) {
                if (words[i - 1][j] !== words[i][j]) {
                    letterOrder = [words[i - 1][j], words[i][j]];
                    break;
                }
            }
            if (letterOrder.length < 2) {
                if (words[i - 1].length > words[i].length) {
                    return "";
                }
                continue;
            }
            if (!letterOrdering.has(letterOrder[0])) {
                letterOrdering.set(letterOrder[0], new Set());
            }
            if (!reverseLetterOrdering.has(letterOrder[1])) {
                reverseLetterOrdering.set(letterOrder[1], new Set());
            }
            letterOrdering.get(letterOrder[0]).add(letterOrder[1]);
            reverseLetterOrdering.get(letterOrder[1]).add(letterOrder[0]);
        }

        let queue = [];
        let lettersWithoutPrereq = new Set();
        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words[i].length; j++) {
                if (!reverseLetterOrdering.has(words[i][j])) {
                    if (!lettersWithoutPrereq.has(words[i][j])) {
                        queue.push(words[i][j]);
                    }
                    lettersWithoutPrereq.add(words[i][j]);
                }
            }
        }

        for (let i = 0; i < queue.length; i++) {
            if (!letterOrdering.has(queue[i])) {
                continue;
            }
            for (const nextLetter of letterOrdering.get(queue[i])) {
                reverseLetterOrdering.get(nextLetter).delete(queue[i]);
                if (reverseLetterOrdering.get(nextLetter).size <= 0) {
                    reverseLetterOrdering.delete(nextLetter);
                }
                if (!reverseLetterOrdering.has(nextLetter)) {
                    queue.push(nextLetter);
                }
            }
            letterOrdering.delete(queue[i]);
        }

        if (letterOrdering.size === 0) {
            return queue.join('');
        }
        else {
            return "";
        }
    }
}
