function foo (m) {
    return (c) => {
        return c * m
    }
}

const f = foo(2)
const f2 = foo(5)


console.log(f(2), f2(2))