const patientCommandDAO = require('./patientCommandDAO');  
const Patient = require('./patient');
const cache= require('./cache');

function addPatient(lastName, firstName) {
    const patient = new Patient(firstName, lastName);
    //const name=lastName+ ' '+ firstName;
    patientCommandDAO.insertPatient(patient);
    patientCommandDAO.insertPatientList(patient);
    cache.add({key:patient.id,data:patient});
    console.log(cache);

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


    // patientCommandDAO.updatePatient(patient);
}


module.exports = {addPatient,savePatient}