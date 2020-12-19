let array = [2, 10, 5, 9, 15, 61, 1]

Array.prototype.sort = mySort
Array.prototype.forEach = myForEach
Array.prototype.find = myFind
Array.prototype.filter = myFilter
Array.prototype.map = myMap

//-------done--------

function myForEach(f = alert) {
    const array = this
    for (let i = 0; i < array.length; i++) {
        f(array[i])
    }
}

function mySort(sortFunction = function(current, next) {
    current = String(current)
    next = String(next)

    if (current < next) {
        return -1
    }
    else {
        return 1
    }
    }) {
    let array = this;
    
    for (let i = 0; i < array.length; i++) {
        f(0, sortFunction)

        if (i === array.length - 1) {
            return array
        }
    }

    function f(index, sortFunction) {
        if (index < array.length - 1) {
            let current = array[index];
            let next = array[index + 1];
            if (sortFunction(current, next) > 0) {
                array[index] = next;
                array[index + 1] = current
            }
            f(index + 1, sortFunction)
        }
        else if (index === array.length - 1) {    
            return 
        }  
    }
}

function myFilter(filterFunction) {
    const array = this;
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (filterFunction(array[i])) {
            result[result.length] = array[i]
        }
    }

    console.log(result)
}

function myFind(findFunction) {
    const array = this;

    for (let i = 0; i < array.length; i++) {
        if (findFunction(array[i])) {
            console.log(array[i])
            break
        }
    }
}

function myMap(mapFunction = () => {}) {
    const array = this;
    let result = []

    for (let i = 0; i < array.length; i++) {
        let resultElem = mapFunction(array[i])

        result[result.length] = resultElem
    }

    console.log(result)
}