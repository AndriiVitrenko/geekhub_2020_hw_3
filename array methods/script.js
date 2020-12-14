let array = [2, 10, 5, 9, 15, 61, 1]

Array.prototype.sort = mySort
Array.prototype.forEach = myForEach
Array.prototype.find = myFind
Array.prototype.filter = myFilter
Array.prototype.map = myMap

//-------done--------

function myForEach(array = this, f = alert) {
    for (let i = 0; i < array.length; i++) {
        f(array[i])
    }
}

function mySort(array = this, index = 0, sortFunction = function(current, next) {
    current = String(current)
    next = String(next)

    if (current < next) {
        return -1
    }
    else {
        return 1
    }
}) {
    let count = 0;
    
    for (count; count < array.length; count++) {
        f(array, index, sortFunction)

        if (count === array.length - 1) {
            console.log(array)
        }
    }

    function f(array, index = 0, sortFunction) {
        let startIndex = index;

        if (startIndex < array.length - 1) {
            let current = array[startIndex];
            let next = array[startIndex + 1];
            if (sortFunction(current, next) > 0) {
                array[startIndex] = next;
                array[startIndex + 1] = current
            }
            f(array, startIndex + 1, sortFunction)
        }
        else if (startIndex === array.length - 1) {    
            return array
        }  
    }
}

function myFilter(array = this, filterFunction) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (filterFunction(array[i])) {
            result[result.length] = array[i]
        }
    }

    console.log(result)
}

function myFind(array = this, findFunction) {

    for (let i = 0; i < array.length; i++) {
        if (findFunction(array[i])) {
            console.log(array[i])
            break
        }
    }
}

function myMap(array = this, mapFunction = () => {}) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        let resultElem = mapFunction(array[i])

        result[result.length] = resultElem
    }

    console.log(result)
}