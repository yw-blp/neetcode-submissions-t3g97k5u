class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let minSeed = 1;
        let maxSeed = 2147483648;
        //n & 2,147,483,648 // until 65536 <<
        //n & 1 // until 32768 <<
        //console.log(n.toString(2));
        for (let i = 0; i < 16; i++) {
            n = (n ^ (((minSeed | maxSeed) >>> 0) & ((((n & minSeed) && 1) ^ ((n & maxSeed) && 1)) * 4294967295))) >>> 0;
            minSeed = (minSeed << 1) >>> 0;
            maxSeed = maxSeed >>> 1;
        }
        //console.log(n.toString(2), 1005322240 - 964176192);
        //n = (n ^ (((minSeed | maxSeed) >>> 0) & ((((n & minSeed) && 1) ^ ((1 & maxSeed) >>> 0))) * 4294967295)) >>> 0;
        //console.log(n.toString(2));
        //console.log((((minSeed | maxSeed) >>> 0) && ((((n & minSeed) && 1) ^ ((1 & maxSeed) >>> 0))) * 4294967295));

        return n;
    }
}
