
class Patient{
    static id=1;
    firstName;
    lastName;
    creationDate;

    constructor(firstName,lastName){
        this.id=Patient.getNextId();
        this.firstName=firstName;
        this.lastName=lastName;
        this.creationDate=this.setCreationDate();
    }

    static getNextId() {
        return Patient.id++;
    }
    setCreationDate() {
        return new Date();
    }
    setname(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName
    }

}



//console.log(Patient1,Patient2,Patient3)

module.exports=Patient;
