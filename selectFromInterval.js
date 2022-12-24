function selectFromInterval(arr, firstInt, secondInt) {
    const isValidNum = (value) => typeof (+value) === 'number';
    if(!isValidNum(firstInt) || !isValidNum(secondInt)){
        throw new Error()
    }
    if(!Array.isArray(arr) || arr.some(el => !isValidNum(el) || arr.length === 0)){
        throw new Error()
    }
    return arr.filter(el => {
        if (secondInt > firstInt) {
            return el >= firstInt && el <= secondInt;
        } else {
            return el >= secondInt && el <= firstInt;
        }
    });
}
