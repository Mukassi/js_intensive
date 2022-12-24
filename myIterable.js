const myIterable = {
    from: 1, to: 4
}
myIterable[Symbol.iterator] = function (){
    if (this.to < this.from){
        throw new Error('Значение from не может быть больше значения to');
    }
    if (!this.from 
        || !this.to 
        || typeof this.from !== 'number' 
        || typeof this.to !== 'number' 
        || isNaN(this.from) 
        || isNaN(this.to)){
        throw new Error('Свойства from и to должны быть введены. Они должны быть числами!');
    }
    return {
        from: this.from,
        to: this.to,
        next(){
            if (this.from <= this.to){
                return {done: false, value: this.from++}
            } else {
                return {done: true}
            }
        }
    }
}
// сложность по Big O: O(1)
