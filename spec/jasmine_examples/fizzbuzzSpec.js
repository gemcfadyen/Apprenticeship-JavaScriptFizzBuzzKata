describe("FizzBuzz", function() {
  var FizzBuzz = require("../../lib/jasmine_examples/fizzbuzz");

  describe("rules", function() {
    var fizzBuzz;

    beforeAll(function() {
      fizzBuzz = new FizzBuzz();
    });

     it("knows 3 is divisible by 3", function() {
       expect(fizzBuzz.numberIsDivisibleByThree(3)).toBeTruthy();
     });

     it("knows 2 is not divisible by 3", function() {
       expect(fizzBuzz.numberIsDivisibleByThree(2)).toBeFalsy();
     });

     it("knows 5 is divisible by 5", function() {
       expect(fizzBuzz.numberIsDivisibleByFive(5)).toBeTruthy();
     });

     it("knows 4 is not divisible by 5", function() {
       expect(fizzBuzz.numberIsDivisibleByFive(4)).toBeFalsy();
     });

     it("knows 15 is divisible by 15", function() {
       expect(fizzBuzz.numberIsDivisibleByFifteen(15)).toBeTruthy();
     });

     it("knows 14 is not divisible by 15", function() {
       expect(fizzBuzz.numberIsDivisibleByFifteen(14)).toBeFalsy();
     });
  });
});
