
const DAO= require('./bankDAO')
function getBalance(){
    
        DAO.retrieveBalance();
}

//getBalance()
module.exports=getBalance;