let curr;
let currMin;

class MinStackNode {

    constructor(val, down) {
        this.val = val;
        this.down = down;
    }

}

class MinStack {
    
    constructor() {
        curr = null;
        currMin = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (!currMin) {
            currMin = new MinStackNode(val, currMin);
        }
        else if (val <= currMin.val) {
            currMin = new MinStackNode(val, currMin);
        }
        curr = new MinStackNode(val, curr);
    }

    /**
     * @return {void}
     */
    pop() {
        if (currMin.val == curr.val) {
            currMin = currMin.down;
        }
        curr = curr.down;
    }

    /**
     * @return {number}
     */
    top() {
        return curr.val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return currMin.val;
    }
}
