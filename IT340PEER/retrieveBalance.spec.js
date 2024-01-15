
const getBalance=require('./bank');
const DAO=require('./bankDAO');

test("retrieveBalance", () => {
    //const mockCallback = jest.fn(getBalance);
    const spy=jest.spyOn(DAO, 'retrieveBalance').mockImplementation(() => {});
    getBalance();
    expect(spy).toHaveBeenCalled();
});