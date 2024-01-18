const database = require('./database');

function retrievePatientList() {
    return database.patient.map(({ creationDate, ...rest }) => rest)
}

module.exports = {retrievePatientList}