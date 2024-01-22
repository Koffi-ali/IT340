class Event{
    name;
    patientId; 
    payload;
    creationDate;
    constructor(name,id,payload){
        this.name=name;
        this.patientId=id;
        this.payload=payload;
        this.creationDate=this.setCreationDate();
    }

    setCreationDate() {
        return new Date();
    }
    
}

module.exports=Event;