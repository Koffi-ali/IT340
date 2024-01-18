const patientDAO = require('./patientQueryDAO')

function getPatientList() {
    return patientDAO.retrievePatientList()
}

module.exports = {getPatientList}