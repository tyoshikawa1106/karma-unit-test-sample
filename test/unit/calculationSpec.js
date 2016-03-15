// add method test
describe("addTest", function() {

  it("1 + 1 = 2", function() {
    expect(Calculation.add(1, 1)).toBe(2);
  });

  it("null + null = 0", function() {
    expect(Calculation.add(null, null)).toBe(0);
  });

  it("10000 + 5000 = 15000", function() {
    expect(Calculation.add(10000, 5000)).toBe(15000);
  });

});

// subtraction method test
describe("subtractionTest", function() {

  it("2 - 1 = 1", function() {
    expect(Calculation.subtraction(2, 1)).toBe(1);
  });

  it("null - null = 0", function() {
    expect(Calculation.subtraction(null, null)).toBe(0);
  });

  it("10000 - 5000 = 5000", function() {
    expect(Calculation.subtraction(10000, 5000)).toBe(5000);
  });

});