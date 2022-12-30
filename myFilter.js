function myFilter(callBack, obj = null) {
    const result = [];
    for (let i = 0; i <= this.length; i++){
        if (callBack.call(obj, this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}
Array.prototype.myFilter = myFilter;