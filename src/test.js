var obj = { num: 2 };

function add(a, b){
    return this.num + a + b;
}

console.log(add.call(obj, 3, 5));

////////////////////////////////////////////

var obj = { num: 2 };

function add(a, b){
    return this.num + a + b;
}

console.log(add.apply(obj, [3, 5]));

////////////////////////////////////////////

var obj = { num: 2 };

function add(a, b){
    return this.num + a + b;
}

const func = add.bind(obj, 3, 5);
func(); // Возвращает 10