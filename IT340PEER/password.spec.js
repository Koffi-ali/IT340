const password= require('./password');

test("password", () => {
    let result = password('helloazaazezeA#1');
    expect(result).toEqual(true);
});