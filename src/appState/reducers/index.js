import patientReducer from './patientReducer';
import editPatientReducer from './editPatientReducer';
import searchBoxPatientReducer from './searchBoxPatientReducer'

import { combineReducers } from 'redux';

export default combineReducers({
    patients: patientReducer,
    editPatients: editPatientReducer,
    searchBoxPatient : searchBoxPatientReducer
});