const makeId = (type, name, ...extra) => {
    return `${type ? type + ':' : ''}${[name || Math.random().toString(32).substring(2)].concat(extra).join(':')}`
}

const makeNode = (node) => {
    const { id: _id, type = '', label = '', props = {}, edges = [], ...rest } = node

    const id = _id || makeId(type, label)

    return { ...rest, id, type, label, props, edges }
}

const flatten = (array, times) => {
    let result = array

    for (let i = 0; i < times; i++) {
        result = [].concat(...result)
    }

    return result
}

function isIterable(obj) {
    if (!obj) {
        return false
    }

    return typeof(obj[Symbol.iterator]) === 'function' || typeof(obj[Symbol.asyncIterator]) === 'function'
}

function isSyncIterable(obj) {
    if (!obj) {
        return false
    }

    return typeof(obj[Symbol.asyncIterator]) === 'function'
}

function isAsyncIterable(obj) {
    if (!obj) {
        return false
    }

    return typeof(obj[Symbol.asyncIterator]) === 'function'
}

module.exports = { makeId, makeNode, flatten, isIterable, isSyncIterable, isAsyncIterable }
