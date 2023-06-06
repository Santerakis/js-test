Array.prototype.customFilter = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.customFilter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

/////////////////////////////////////////////////////////////////

Array.prototype.customMap = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

const numbers2 = [1, 2, 3, 4, 5];

const squaredNumbers = numbers2.customMap(function(num) {
    return num * num;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
