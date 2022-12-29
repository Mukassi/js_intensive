class Stack {
    constructor(...arg) {
        this.stack = {...arg},
        this.size = arg.length;
    }
    push(value) {
        this.stack[this.size] = value;
        this.size++;
    };
    pop() {
        if (this.size) {
            delete this.stack[this.size - 1];
            this.size--;
        } else {
            return 'This stack is empty';
        }
    };
    peek() {
        if (this.size) {
            return this.stack[this.size - 1];
        } else {
            return 'This stack is empty';
        }
    };
    length() {
        if (this.size) {
            return this.size;
        } else {
            return 'This stack is empty';
        }
    };
}