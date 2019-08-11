
import {GET_PATIENT_SEARCHBOX, SET_PATIENT_SEARCHBOX, TOGGLE_SEARCHBOX, TOGGLE_LOADING} from '../actionTypes'


function setPatientsSerBox(patients) {
    return {
        type: SET_PATIENT_SEARCHBOX,
        patients: patients
    }
}

function toggleSearchbox(open) {
    return {
        type:TOGGLE_SEARCHBOX,
        isOpen: open 
    }
}

function toggleLoading(loading) {
    return {
        type:TOGGLE_LOADING,
        isLoadingg: loading 
    }
}


export {
    setPatientsSerBox,
    toggleSearchbox,
    toggleLoading
}