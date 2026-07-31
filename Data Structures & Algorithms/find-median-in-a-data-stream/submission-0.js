class MedianFinder {
    constructor() {
        this.leftHalf = new MaxPriorityQueue();  // 3, 2, 1
        this.rightHalf = new MinPriorityQueue(); // 4, 4, 6, 6, 9
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (num < this.rightHalf.front() ?? +Infinity) {
            this.leftHalf.enqueue(num);
        }
        else {
            this.rightHalf.enqueue(num);
        }
        if (this.leftHalf.size() + 1 < this.rightHalf.size()) {
            this.leftHalf.enqueue(this.rightHalf.dequeue());
        }
        else if (this.leftHalf.size() > this.rightHalf.size() + 1) {
            this.rightHalf.enqueue(this.leftHalf.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.leftHalf.size() < this.rightHalf.size()) {
            return this.rightHalf.front();
        }
        if (this.leftHalf.size() > this.rightHalf.size()) {
            return this.leftHalf.front();
        }
        else {
            return (this.leftHalf.front() + this.rightHalf.front()) / 2;
        }
    }
}
