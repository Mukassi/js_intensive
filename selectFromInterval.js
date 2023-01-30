function selectFromInterval(arr, firstInt, secondInt) {
    const isValidNum = (value) => typeof (+value) === 'number';
    if(!isValidNum(firstInt) || !isValidNum(secondInt)){
        throw new Error("Границы должны быть числом")
    }
    if(!Array.isArray(arr) || arr.some(el => !isValidNum(el) || arr.length === 0)){
        throw new Error("Первый аргумент функции должен быть массивом")
    }
    return arr.filter(el => {
        if (secondInt > firstInt) {
            return el >= firstInt && el <= secondInt;
        } else {
            return el >= secondInt && el <= firstInt;
        }
    });
}
// сложность по Big O: O(n)