function Calculator() {

    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    },

    this.calculate = function (str) {
        let splitStr = str.split(" ");
        let a = +splitStr[0],
            op = splitStr[1],
            b = +splitStr[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        } else {
            return this.methods[op](a,b);
        }
    },
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator();

console.log(calc.calculate("5 + 3"));