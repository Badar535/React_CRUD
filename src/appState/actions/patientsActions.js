
import { SET_ALL_PATIENTS, RESET_ALL_PATIENT } from '../actionTypes'



function setAllPatients(patients) {
    return {
        type: SET_ALL_PATIENTS,
        patients: patients
    }
}

function resetPatient(){
    return{
        type: RESET_ALL_PATIENT
    }
}

//store.dispatch({type: GET_ALL_PATIENTS}}
// store.dispatch({
//         type: SET_ALL_PATIENTS,
//         patients: patients
//     })


export {
    setAllPatients,
    resetPatient
}