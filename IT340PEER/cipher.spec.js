const cipher = require('./cipher');
test("cipher", () => {
    let result = cipher('hello');
    expect(result).toEqual("-----");
});
