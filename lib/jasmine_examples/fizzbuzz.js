function FizzBuzz() {
}

FizzBuzz.prototype.numberIsDivisibleByThree = function(number) {
  return number % 3 == 0;
}

FizzBuzz.prototype.numberIsDivisibleByFive = function(number) {
  return number % 5 == 0;
}

FizzBuzz.prototype.numberIsDivisibleByFifteen = function(number) {
  return this.numberIsDivisibleByThree(number) && this.numberIsDivisibleByFive(number);
}

module.exports = FizzBuzz;
