export const flatten = arr => arr.reduce((acc, value) => acc.concat(value), []);

export const createTree = (arr, prop) => arr.reduce((acc, value, i) => {
    acc.i[value.id] = value;
    value.children = [];
    value[prop] === null ?
        acc.result.push(value) :
        acc.i[value[prop]].children.push(value);
    return acc;
}, { i:{}, result: [] }).result;

export const getObjectType = (obj) => {
    const type = Object.prototype.toString.call(obj).slice(8, -1);
    if (type === 'Object' && typeof obj[Symbol.iterator] === 'function') {
      return 'Iterable';
    }
    return type;
}

