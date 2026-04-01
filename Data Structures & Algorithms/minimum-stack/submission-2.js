let curr;
let currMin;

class MinStackNode {

    constructor(val, left) {
        this.val = val;
        this.left = left;
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
        if (currMin && val <= currMin.val) {
            currMin = new MinStackNode(val, currMin);
        }
        if (!currMin) {
            currMin = new MinStackNode(val, currMin);
        }
        curr = new MinStackNode(val, curr);
    }

    /**
     * @return {void}
     */
    pop() {
        if (currMin.val == this.top()) {
            currMin = currMin.left;
        }
        curr = curr.left;
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
