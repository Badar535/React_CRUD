
import Service from '../../service/Service'
import { isPatientSaved } from '../actions/editPatientsAction'

var service = new Service();

function addRecord(patient) {
    return (dispatch, getState) => {

        const data = JSON.stringify({
            // "id": Math.floor((Math.random() + 1) * 0x100000),
            "p_f_name": patient.p_f_name,
            "p_l_name": patient.p_l_name,
            "p_email": patient.p_email,
            "p_phone": patient.p_phone,
            "p_gender": patient.p_gender
        })
        service.addPatient(data)
            .then(() => dispatch(isPatientSaved(true)))     //this.props.history.push('/')
    }
}

function editRecord(patient) {
    return (dispatch, getState) => {
        var id = getState().editPatients.patientId;

        const data = JSON.stringify(patient);
        service.updatePatient(id, data)
            .then(() => dispatch(isPatientSaved(true)))
    }
}

export {
    addRecord,
    editRecord
}