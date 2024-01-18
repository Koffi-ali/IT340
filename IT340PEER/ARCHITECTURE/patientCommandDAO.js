const database = require('./database');

function insertPatient(patient) {
    database.patient.push(patient)
}

function updatePatient(patient) {
    const index = database.patient.findIndex((p) => p.id === patient.id);
    database.patient[index] = patient;
}

module.exports = {insertPatient,updatePatient}