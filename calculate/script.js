function Constructor(number) {
    return {
        number: number,

        add: function(n) {
            this.number += n
            return this
        },

        multiply: function(n) {
            this.number *= n
            return this
        },

        result: function() {
            return this.number
        }
    }
}

function calculate(number) {
    return new Constructor(number)
}

console.log(calculate(3).add(2).multiply(8).result())