class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {

        let markedLocations = [];

        function search(wordIndex, x, y) {
            console.log(wordIndex, x, y);
            if (wordIndex + 1 === word.length) {
                return true;
            }

            board[y][x] += "!";
            markedLocations.push({x: x, y: y});

            let isPresent = false;
            if (board[y][x - 1] === word[wordIndex + 1]) {
                isPresent ||= search(wordIndex + 1, x - 1, y);
                //board[y][x - 1] = board[y][x - 1][0];
            }
            if (board[y][x + 1] === word[wordIndex + 1]) {
                isPresent ||= search(wordIndex + 1, x + 1, y);
                //board[y][x + 1] = board[y][x + 1][0];
            }
            if (board[y - 1]?.[x] === word[wordIndex + 1]) {
                isPresent ||= search(wordIndex + 1, x, y - 1);
                //board[y - 1][x] = board[y - 1][x][0];
            }
            if (board[y + 1]?.[x] === word[wordIndex + 1]) {
                isPresent ||= search(wordIndex + 1, x, y + 1);
                //board[y + 1][x] = board[y + 1][x][0];
            }

            board[y][x] = board[y][x][0];

            return isPresent;
        }

        //function unmarkLocations() {
        //    for (const location of markedLocations) {
        //        board[location.y][location.x] = board[location.y][location.x][0];
        //    }
        //    markedLocations = [];
        //}

        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (board[y][x] === word[0]) {
                    console.log(search(0, x, y));
                    if (search(0, x, y)) {
                        return true;
                    }
                    //unmarkLocations();
                }
            }
        }

        return false;
    }
}
