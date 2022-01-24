// 계산기 

const calculator = {
    plus: function (a, b) {
        returna + b;
    },
    minus: function (a, b) {
        returna - b;
    },
    times: function (a, b) {
        returna * b;
    },
    divide: function (a, b) {
        returna / b;
    },
    power: function (a, b) {
        returna ** b;
    }
}

const plusResult = 5;
const minusResult = -5;
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
