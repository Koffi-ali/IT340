//const patientService= require('./patientService');
// patientService.addPatient("John","Doe");
// patientService.addPatient("Jeanne","D'Arc");
// patientService.addPatient("Jean","D'Alembert");

// patientService.getPatientList()

// patientService.savePatient(1,"Jeremy","Detend");
// console.log(patientService.getPatientList()) 
// console.log(patientService.getPatient(2))


const patientCommand = require('./patientCommand')
patientCommand.addPatient("Jordan","Découpe1")
patientCommand.addPatient("Jordan","Découpe2")
patientCommand.addPatient("Jordan","Découpe3")

patientCommand.savePatient(1,"Jodanne","DécoupeModifié")

patientCommand.addPatient("Jordan","Découpe1")




