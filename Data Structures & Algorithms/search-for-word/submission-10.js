class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {

        function search(wordIndex, x, y) {
            if (wordIndex + 1 === word.length) {
                return true;
            }

            board[y][x] += "!";

            let isPresent = false;
            if (x > 0 && board[y][x - 1] === word[wordIndex + 1]) {
                isPresent ||= search(wordIndex + 1, x - 1, y);
            }
            if (x < board[y].length - 1 && board[y][x + 1] === word[wordIndex + 1]) {
                isPresent ||= search(wordIndex + 1, x + 1, y);
            }
            if (y > 0 && board[y - 1][x] === word[wordIndex + 1]) {
                isPresent ||= search(wordIndex + 1, x, y - 1);
            }
            if (y < board.length - 1 && board[y + 1][x] === word[wordIndex + 1]) {
                isPresent ||= search(wordIndex + 1, x, y + 1);
            }

            board[y][x] = board[y][x][0];

            return isPresent;
        }

        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (board[y][x] === word[0]) {
                    if (search(0, x, y)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
