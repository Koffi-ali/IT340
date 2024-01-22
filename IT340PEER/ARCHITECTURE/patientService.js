const Patient = require('./patient')
//const {insertPatient,retrievePatientList}= require('./patientDAO')*
const patientDAO = require('./patientDAO')



function addPatient(lastName, firstName) {
    patientDAO.insertPatient(new Patient(firstName, lastName));
    
}

function getPatientList() {
    return patientDAO.retrievePatientList()
}


function savePatient(id, lastName, firstName) {
    const patient = patientDAO.getPatient(id);
    patient.setname(firstName, lastName)
    // patientDAO.updatePatient(patient);
}

function getPatient(id) {
    return patientDAO.retrievePatient(id)
}

module.exports = { addPatient, getPatientList, savePatient, getPatient };

