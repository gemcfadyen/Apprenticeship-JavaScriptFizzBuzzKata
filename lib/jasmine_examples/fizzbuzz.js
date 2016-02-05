function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if(this.numberIsDivisibleByFifteen(number)) {
    return "FizzBuzz";
  } else if(this.numberIsDivisibleByThree(number)) {
    return "Fizz";
  } else if(this.numberIsDivisibleByFive(number)) {
    return "Buzz";
  } else {
    return number;
  }
}

FizzBuzz.prototype.numberIsDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
}

FizzBuzz.prototype.numberIsDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
}

FizzBuzz.prototype.numberIsDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
}

FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return number % divisor == 0;
}

module.exports = FizzBuzz;
