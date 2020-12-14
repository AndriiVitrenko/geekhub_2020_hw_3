function sum(firstArg) {
    let currentSum = firstArg;

    function f(nextArg) {
        currentSum += nextArg;
        return f
    }

    f.toString = function() {
        return currentSum
    }

    return f
}

console.log(sum(1)(2)(3))