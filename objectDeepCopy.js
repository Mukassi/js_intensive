function makeObjectDeepCopy(obj){
    let newObj = {};
    if (typeof obj !== 'object') {
        return obj;
    };
    Object
        .entries(obj)
        .map(elem => {
            newObj[elem[0]] = makeObjectDeepCopy(elem[1])
        })
    return newObj;
}
