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
        console.log(letterOrdering);
        console.log(reverseLetterOrdering);

        let queue = new Set();
        for (let i = words.length - 1; i >= 0; i--) {
            for (let j = words[i].length - 1; j >= 0; j--) {
                if (!reverseLetterOrdering.has(words[i][j])) {
                    queue.add(words[i][j]);
                }
            }
        }

        for (const letter of queue) {
            if (!letterOrdering.has(letter)) {
                continue;
            }
            for (const nextLetter of letterOrdering.get(letter)) {
                reverseLetterOrdering.get(nextLetter).delete(letter);
                if (reverseLetterOrdering.get(nextLetter).size <= 0) {
                    reverseLetterOrdering.delete(nextLetter);
                }
                if (!reverseLetterOrdering.has(nextLetter)) {
                    queue.add(nextLetter);
                }
            }
            letterOrdering.delete(letter);
        }

        if (letterOrdering.size === 0) {
            let arr = [];
            for (const letter of queue) {
                arr.push(letter);
            }
            return arr.join('');
        }
        else {
            return "";
        }
    }
}
