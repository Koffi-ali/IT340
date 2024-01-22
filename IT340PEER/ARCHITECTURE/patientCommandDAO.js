const database = require('./database');
const eventStore= require('./eventStore')
function insertPatient(patient) {
    database.patient.push(patient)
    //console.log("database dans insertpatient",database);
}

function insertPatientList(patient){
    const { creationDate, ...p }=patient;
    
    database.patientList.push(p);
    //console.log(database);
}
function updatePatient(patient) {
    const index = database.patient.findIndex((p) => p.id === patient.id);
    database.patient[index] = patient;
}
function getPatient(id) {
    return database.patient.find((patient) => patient.id === id);
}
function getPatientList(id) {
    return database.patientList.find((patient) => patient.id === id);
}

function getEventId(id){
    return eventStore.filter((event)=>event.id=id);
}

module.exports = {insertPatient,updatePatient,insertPatientList,getPatient,getPatientList}