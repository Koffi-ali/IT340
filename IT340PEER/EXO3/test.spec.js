const transferMoney=require('./bank');
const DAO=require('./bankTransfer');
const DAO1=require('./bankDAO');

test("Test", () => {
    //const mockCallback = jest.fn(getBalance);
    const spy=jest.spyOn(DAO1, 'debitAccount').mockImplementation(() => {});
    transferMoney(2,500);
    expect(spy).toHaveBeenCalled();
});