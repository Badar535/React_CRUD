
import {GET_PATIENT_DETAILS, SET_PATIENT_DETAILS, SET_PATIENT_ID, PATIENT_SAVED, RESET_INITIAL_STATE} from '../actionTypes'

function getPatientDetails(id) {
    return {
        type: GET_PATIENT_DETAILS,
        patientId: id
    };
}

function setPatientDetails(patient) {
    return {
        type: SET_PATIENT_DETAILS,
        patient: patient
    }
}

function setPatientId(id){
    return{
        type: SET_PATIENT_ID,
        patientId: id
    }
}

function isPatientSaved(issaved){
    return{
        type: PATIENT_SAVED,
        psaved: issaved
    }
}

function resetEditPatient(){
    return{
        type: RESET_INITIAL_STATE
    }
}

export {
    getPatientDetails,
    setPatientDetails,
    setPatientId,
    isPatientSaved,
    resetEditPatient
}