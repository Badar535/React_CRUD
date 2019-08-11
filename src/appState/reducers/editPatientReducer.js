
import { SET_PATIENT_ID, SET_PATIENT_DETAILS, PATIENT_SAVED, RESET_INITIAL_STATE } from '../actionTypes'

const initialState = {
    patientId: null,
    patientDetails: null,
    patientSaved: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PATIENT_ID:
            return { ...state, patientId: action.patientId }
        case SET_PATIENT_DETAILS:
            return { ...state, patientDetails: action.patient }
        case PATIENT_SAVED:
            return { ...state, patientSaved: action.psaved }
        case RESET_INITIAL_STATE:
            return { ...state, patientId: null, patientDetails: null, patientSaved: false }
        default:
            return state;
    }
}