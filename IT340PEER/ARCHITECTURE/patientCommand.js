const patientDAO = require('./patientCommandDAO');  
const Patient = require('./patient')

function addPatient(lastName, firstName) {
    patientDAO.insertPatient(new Patient(firstName, lastName));

}

function savePatient(id, lastName, firstName) {
    const patient = patientDAO.getPatient(id);
    patient.setname(firstName, lastName)
    // patientDAO.updatePatient(patient);
}

module.exports = {addPatient,savePatient}