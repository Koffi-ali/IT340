const patientService= require('./patientService');
patientService.addPatient("John","Doe");
patientService.addPatient("Jeanne","D'Arc");
patientService.addPatient("Jean","D'Alembert");

patientService.getPatientList()

patientService.savePatient(1,"Jeremy","Detend");
console.log(patientService.getPatientList()) 
console.log(patientService.getPatient(2))


const patientCommand = require('./patientCommand')
patientCommand.addPatient("Jordan","Découpe")
patientCommand.savePatient(3,"Jules","Dormeur")