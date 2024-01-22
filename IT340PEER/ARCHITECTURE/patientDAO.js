const database = require('./database');
function insertPatient(patient) {
    database.patient.push(patient)
}

function retrievePatientList() {
    return database.patient.map(({ creationDate, ...rest }) => rest)
}
function updatePatient(patient) {
    const index = database.patient.findIndex((p) => p.id === patient.id);
    database.patient[index] = patient;
}

function getPatient(id) {
    return database.patient.find((patient) => patient.id === id);
}

function retrievePatient(id) {
    const index = database.patient.findIndex((p) => p.id ===id)
    const patient=database.patient.find(p=> p.id===id)
    const {lastName,firstName,...point}=database.patient[index];
    point["name"]=lastName+ ' '+ firstName;
    return point;
}



console.log(retrievePatientList(1))
module.exports = { insertPatient, retrievePatientList, updatePatient, getPatient, retrievePatient };
