class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {

        function search(wordIndex, x, y) {
            if (board[y][x] !== word[wordIndex]) {
                return false;
            }
            if (wordIndex === word.length - 1) {
                return true;
            }

            let revert = board[y][x];
            board[y][x] = "!";

            let isPresent = false;
            if (x > 0) {
                isPresent ||= search(wordIndex + 1, x - 1, y);
            }
            if (x < board[y].length - 1) {
                isPresent ||= search(wordIndex + 1, x + 1, y);
            }
            if (y > 0) {
                isPresent ||= search(wordIndex + 1, x, y - 1);
            }
            if (y < board.length - 1) {
                isPresent ||= search(wordIndex + 1, x, y + 1);
            }

            board[y][x] = revert;

            return isPresent;
        }

        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (search(0, x, y)) {
                    return true;
                }
            }
        }

        return false;
    }
}
