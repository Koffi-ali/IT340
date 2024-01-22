const patientCommandDAO = require('./patientCommandDAO');  
const Patient = require('./patient');
const cache= require('./cache');
const eventStore= require('./eventStore')
const Event= require('./event')

function addPatient(lastName, firstName) {
    const patient = new Patient(firstName, lastName);
    //const name=lastName+ ' '+ firstName;
    const event= new Event("Patient Added",patient.id,patient);
    eventStore.addEvent(event);
    console.log("event created:" ,event);
    console.log("event:",eventStore.eventList);

    // patientCommandDAO.insertPatient(patient);
    // patientCommandDAO.insertPatientList(patient); 

}

function restorePatient(id){

}

function savePatient(id, lastName, firstName) {
    const patient = patientCommandDAO.getPatient(id);
    patient.setname(firstName, lastName);
    const {lastName: lname,firstName:fname,...point}=patient;
    point["name"]=lname+ ' '+ fname;
    cache[point.id]=point;
    
    const patientList = patientCommandDAO.getPatientList(id);
    patientList.firstName = firstName;
    patientList.lastName = lastName;

    const event = new Event("Patient Saved",patient.id,patient)

    // patientCommandDAO.updatePatient(patient);
}


module.exports = {addPatient,savePatient}