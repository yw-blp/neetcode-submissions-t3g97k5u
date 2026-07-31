class MedianFinder {
    constructor() {
        this.leftHalf = new MaxPriorityQueue();
        this.rightHalf = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        let leftHalf = this.leftHalf;
        let rightHalf = this.rightHalf;
        if (num < leftHalf.front() ?? +Infinity) {
            leftHalf.enqueue(num);
        }
        else {
            rightHalf.enqueue(num);
        }
        if (leftHalf.size() + 1 < rightHalf.size()) {
            leftHalf.enqueue(rightHalf.dequeue());
        }
        else if (leftHalf.size() > rightHalf.size() + 1) {
            rightHalf.enqueue(leftHalf.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        let leftHalf = this.leftHalf;
        let rightHalf = this.rightHalf;
        if (leftHalf.size() < rightHalf.size()) {
            return rightHalf.front();
        }
        else if (leftHalf.size() > rightHalf.size()) {
            return leftHalf.front();
        }
        else {
            return (leftHalf.front() + rightHalf.front()) / 2;
        }
    }
}
