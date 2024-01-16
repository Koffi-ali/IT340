const DAO=require('./bankTransfer')
const DAO1=require('./bankDAO')
function transferMoney(accountId,amount){
    DAO.transfert(accountId,amount);
    DAO1.debitAccount(accountId,amount);
}

module.exports=transferMoney;
