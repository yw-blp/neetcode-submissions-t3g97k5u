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
        //console.log(val, this.top());
        if (currMin && val <= currMin.val) {
            //console.log(val, currMin.val);
            currMin = new MinStackNode(val, currMin);
            //console.log(currMin.val);
        }
        if (!currMin) {
            currMin = new MinStackNode(val, currMin);
            //console.log(currMin.val);
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
