
import { GET_PATIENT_SEARCHBOX, SET_PATIENT_SEARCHBOX, TOGGLE_SEARCHBOX, TOGGLE_LOADING } from '../actionTypes'

const initialState = {
    patientsList: [],
    open: false,
    isLoading : false
}


export default (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_SEARCHBOX:
            return {...state, open: action.isOpen}
        case TOGGLE_LOADING:
            return{...state, isLoading: action.isLoadingg}
        case GET_PATIENT_SEARCHBOX:
            return { ...state };
        case SET_PATIENT_SEARCHBOX:
            return { ...state, patientsList: action.patients, open: action.patients.length > 0 }
        default:
            return state;
    }
}