// hello method test
describe("helloTest", function() {

  it("Hello", function() {
    expect(Hello.getString()).toBe('Hello');
  });

  it("Not Hello", function() {
    expect(Hello.getString()).not.toBe('See you!');
  });

});