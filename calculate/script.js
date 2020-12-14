function Constructor(number) {
    return {
        number: number,

        add: function(n) {
            this.number += n
            return new Constructor(this.number)
        },

        multiply: function(n) {
            this.number *= n
            return new Constructor(this.number)
        },

        result: function() {
            return this.number
        }
    }
}

function calculate(number) {
    return new Constructor(number)
}

calculate(3).add(2).multiply(3).result()