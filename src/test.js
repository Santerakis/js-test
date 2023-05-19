function customMap(callback, array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
        res.push(callback(array[i]))
    }
    return res
}

console.log('customMap: ', customMap((el) => el + 1, [1, 2, 3]))
console.log('map: ', [1, 2, 3].map(el => el + 1));