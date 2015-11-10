describe("fizzBuzz", function(){
  it("returns a number passed to it", function(){
    expect(fizzBuzz(4)).toEqual(4);
  });
  it("returns Fizz if the  number is divisible by 3", function(){
    expect(fizzBuzz(6)).toEqual("Fizz");
  });
  it("returns Buzz if the number is divisible by 5", function(){
    expect(fizzBuzz(10)).toEqual("Buzz");
  });
  it("returns FizzBuzz if the number is divisible by 3 & 5", function(){
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
});
