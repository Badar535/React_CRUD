
import { SET_ALL_PATIENTS, RESET_ALL_PATIENT } from '../actionTypes'

const initialState = {
    patientsList: [],
    isLoading: false
}


export default (state = initialState, action) => {

    switch (action.type) {
        case SET_ALL_PATIENTS:
            return { ...state, patientsList: action.patients, isLoading: false }
        case RESET_ALL_PATIENT:
            return { ...state, patientsList: [], isLoading: false }
        default:
            return state;
    }
}