class PrefixTree {
    constructor() {
        this.prefixMap = new Map();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currentMap = this.prefixMap;
        for (const char of word) {
            if (!currentMap.has(char)) {
                currentMap.set(char, new Map());
            }
            currentMap = currentMap.get(char);
        }
        currentMap.set("_", null);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let currentMap = this.prefixMap;
        for (const char of word) {
            if (!currentMap.has(char)) {
                return false;
            }
            currentMap = currentMap.get(char);
        }
        if (currentMap.has("_")) {
            return true;
        }
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let currentMap = this.prefixMap;
        for (const char of prefix) {
            if (!currentMap.has(char)) {
                return false;
            }
            currentMap = currentMap.get(char);
        }
        return true;
    }
}
