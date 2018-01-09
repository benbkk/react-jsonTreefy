export const flatten = arr => arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

export const objectType = (obj) => {
    const type = Object.prototype.toString.call(obj).slice(8, -1);
    if (type === 'Object' && typeof obj[Symbol.iterator] === 'function') {
        return 'Iterable';
    }
    return type;
}

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
export const createItemString = data => {
    const len = Object.getOwnPropertyNames(data).length;
    return `${len} ${len !== 1 ? 'keys' : 'key'}`;
}