const {Authentication} = require("../Middleware/access-control");
const Appointments = require("../controllers/Appointments");
const ClinicFunctions = require("../controllers/ClinicFunctions");
const Device = require("../controllers/Device");
const PatientFunctions = require("../controllers/PatientFunctions");
const ServiceProvider = require("../controllers/ServiceProvider");
module.exports = app => {
    let router = require("express").Router();
    app.use('/', router)
    //appointment functions
    router.post('/Appointment', Authentication.AccessCheck, Appointments.Appointment.create)
    router.get('/Appointment', Appointments.Appointment.read)
    router.put('/Appointment', Appointments.Appointment.update)
    router.delete('/Appointment', Appointments.Appointment.redact)
    //appointment response functions
    router.post('/Appointment/Response', Appointments.AppointmentResponse.create)
    router.get('/Appointment', Appointments.AppointmentResponse.get)
    router.get('/Appointment/:id', Appointments.AppointmentResponse.getById)
    router.put('/Appointment', Appointments.AppointmentResponse.update)
    router.delete('/Appointment', Appointments.AppointmentResponse.redact)
    //appointment scheule functions
    router.post('/Schedule', Appointments.Schedule.create)
    router.get('/Schedule', Appointments.Schedule.get)
    router.get('/Schedule/:id', Appointments.Schedule.getById)
    router.put('/Schedule', Appointments.Schedule.update)
    router.delete('/Schedule', Appointments.Schedule.redact)
    //Appointment slot functions
    router.post('/AppointmentSlot', Appointments.Schedule.create)
    router.get('/AppointmentSlot', Appointments.Schedule.get)
    router.get('/AppointmentSlot/:id', Appointments.Schedule.getById)
    router.put('/AppointmentSlot', Appointments.Schedule.update)
    router.delete('/AppointmentSlot', Appointments.Schedule.redact)
    //ClinicAccount functions
    router.post('/ClinicAccount', ClinicFunctions.Account.create)
    router.get('/ClinicAccount', ClinicFunctions.Account.get)
    router.get('/ClinicAccount/:id', ClinicFunctions.Account.getById)
    router.put('/ClinicAccount', ClinicFunctions.Account.update)
    router.delete('/ClinicAccount', ClinicFunctions.Account.redact)
    //Encounter functions
    router.post('/Encounter', ClinicFunctions.Encounter.create)
    router.get('/Encounter', ClinicFunctions.Encounter.get)
    router.get('/Encounter/:id', ClinicFunctions.Encounter.getById)
    router.put('/Encounter', ClinicFunctions.Encounter.update)
    router.delete('/Encounter', ClinicFunctions.Encounter.redact)
    //EpisodeOfCare functions
    router.post('/EpisodeOfCare', ClinicFunctions.EpisodeOfCare.create)
    router.get('/EpisodeOfCare', ClinicFunctions.EpisodeOfCare.get)
    router.get('/EpisodeOfCare/:id', ClinicFunctions.EpisodeOfCare.getById)
    router.put('/EpisodeOfCare', ClinicFunctions.EpisodeOfCare.update)
    router.delete('/EpisodeOfCare', ClinicFunctions.EpisodeOfCare.redact)
    //Flag functions
    router.post('/Flag', ClinicFunctions.Account.create)
    router.get('/Flag', ClinicFunctions.Account.get)
    router.get('/Flag/:id', ClinicFunctions.Account.getById)
    router.put('/Flag', ClinicFunctions.Account.update)
    router.delete('/Flag', ClinicFunctions.Account.redact)
    //Device functions
    router.post('/Device', Device.Device.create)
    router.get('/Device', Device.Device.get)
    router.get('/Device/:id', Device.Device.getById)
    router.put('/Device', Device.Device.update)
    router.delete('/Device', Device.Device.redact)
    //DeviceDefinition functions
    router.post('/DeviceDefinition', Device.DeviceDefinition.create)
    router.get('/DeviceDefinition', Device.DeviceDefinition.get)
    router.get('/DeviceDefinition/:id', Device.DeviceDefinition.getById)
    router.put('/DeviceDefinition', Device.DeviceDefinition.update)
    router.delete('/DeviceDefinition', Device.DeviceDefinition.redact)
    //DeviceMetrice functions
    router.post('/DeviceMetrice', Device.DeviceMetrice.create)
    router.get('/DeviceMetrice', Device.DeviceMetrice.get)
    router.get('/DeviceMetrice/:id', Device.DeviceMetrice.getById)
    router.put('/DeviceMetrice', Device.DeviceMetrice.update)
    router.delete('/DeviceMetrice', Device.DeviceMetrice.redact)

}
