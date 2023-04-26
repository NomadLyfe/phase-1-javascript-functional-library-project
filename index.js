function myEach(collection, callback) {
    for (const key in collection) {
        callback(collection[key]);
    }
    return collection;
}
function myMap(collection, callback) {
    const newCollection = []
    for (const key in collection) {
        newCollection.push(callback(collection[key]));
    }
    return newCollection;
}
function myReduce(collection, callback, acc = 0) {
    let out = acc;
    if (out === 0) {
        out = Object.values(collection)[0];
        for (let i = 1; i < Object.keys(collection).length; i++) {
            
            out = callback(out, Object.values(collection)[i], collection);
        }
    } else {
        for (const key in collection) {
            out = callback(out, collection[key], collection);
        }
    }
    return out;
}
function myFind(collection, predicate) {
    for (const key in collection) {
        const currEl = collection[key];
        if (predicate(currEl)) {
            return currEl;
        }
    }
}
function myFilter(collection, predicate) {
    const out = [];
    for (const key in collection) {
        const currEl = collection[key];
        if (predicate(currEl)) {
            out.push(currEl);
        }
    }
    return out;
}
function mySize(collection) {
    let total = 0;
    for (const key in collection) {
        total ++;
    }
    return total;
}
function myFirst(array, n = 1) {
    let out = [];
    if (n === 1) {
        return array[0]
    } else {
        for (let i = 0; i < n; i++) {
            out.push(array[i]);
        }
    }
    return out;
}
function myLast(array, n = 1) {
    let out = [];
    if (n === 1) {
        return array[array.length-1];
    } else {
        for (let i = 0; i < n; i++) {
            out.unshift(array[array.length-1-i]);
        }
    }
    return out;
}
function mySortBy(array, callback) {
    const out = [array[0]];
    for (let j = 1; j < array.length; j++) {
        if (callback(array[j]) < callback(out[0])) {
            out.unshift(array[j]);
        } else if (callback(array[j]) > callback(out[out.length-1])) {
            out.push(array[j]);
        } else {
            let tracker = [];
            for (let i = 0; i < out.length; i++) {
                if (callback(array[j]) >= callback(out[i])) {
                    tracker.push(true);
                }
            }
            out.splice(tracker.length, 0, array[j]);
        }
    }
    return out;
}
function myFlatten(array, bool, newArr=[]) {
    for (const el of array) {
        if (bool) {
            if (typeof el === 'object') {
                for (const ele of el) {
                    newArr.push(ele);
                }
            } else {
                newArr.push(el);
            }
        } else {
            if (typeof el === 'object') {
                myFlatten(el, bool, newArr);
            } else {
                newArr.push(el);
            }
        }
    }
    return newArr;
}
function myKeys(object) {
    let out = [];
    for (const key in object) {
        out.push(key)
    }
    return out;
}
function myValues(object) {
    let out = [];
    for (const key in object) {
        out.push(object[key]);
    }
    return out;
}
