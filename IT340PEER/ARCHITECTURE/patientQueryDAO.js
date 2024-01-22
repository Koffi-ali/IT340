const database = require('./database');

function retrievePatientList() {
    return database.patientList
}

module.exports = {retrievePatientList}