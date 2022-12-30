class Calculator {
    constructor(...args){
        const [firstNum, secondNum] = args;
        if (args.length !== 2 
            || !Number.isFinite(firstNum) || !Number.isFinite(secondNum)) {
            throw new Error ('Параметра долдно быть два и это должны быть числа');
        }
        this.x = firstNum;
        this.y = secondNum;
    }
    setX(value) {
        if (Number.isFinite(value)) {
            this.x = value;
        } else {
            throw new Error('Параметр долден быть числом');
        }
    }
    setY(value) {
        if (Number.isFinite(value)) {
            this.y = value;
        } else {
            throw new Error('Параметр долден быть числом');
        }
    }
    logSum() {
        console.log('Сумма чисел:', this.x + this.y);
    }
    logMul() {
        console.log('Произведение чисел:', this.x * this.y);
    }
    logSub() {
        console.log('Разность чисел:', this.x - this.y);
    }
    logDiv() {
        if (this.y === 0) {
            throw new Error('Делить на ноль нельзя!');
        }
        console.log('Частное чисел:', this.x / this.y);
    }
}

