Array.prototype.myFilter = function(callback) {
    var filteredArray = [];

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }

    return filteredArray;
};

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = numbers.myFilter(function(element) {
    return element % 2 === 0;
});

console.log(evenNumbers);