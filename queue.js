class Queue {
    constructor(...arg) {
        this.queue = {...arg},
        this.qSize = arg.length;
    }
    isEmpty() {
        return !this.qSize;
    };
    enqueue(value) {
        this.queue[this.qSize] = value;
        this.qSize++;
    };
    dequeue() {
        if (this.qSize) {
            const returnedItem = this.queue[0];
            this.qSize--;
            for (let i = 0; i <= this.qSize; i++) {
                this.queue[i] = this.queue[i + 1];
            }
            delete this.queue[this.qSize];
            return returnedItem;
        } else {
            return 'This queue is empty';
        }
    };
    front() {
        if (this.qSize) {
            return this.queue[0];
        } else {
            return 'This queue is empty';
        }
    };
    size() {
        if (this.qSize) {
            return this.qSize;
        } else {
            return 'This queue is empty';
        }
    };
}