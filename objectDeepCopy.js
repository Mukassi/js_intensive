function makeObjectDeepCopy(value){
    let newCopy = Array.isArray(value) ? [] : {};
    if (typeof value !== 'object' || value === null) {
        return value;
    };
    Object
        .entries(value)
        .map(elem => {
                newCopy[elem[0]] = makeObjectDeepCopy(elem[1])
        })
    return newCopy;
}
//сложность по Big O: O(n^2)