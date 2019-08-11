
import { setAllPatients } from '../actions/patientsActions'
import Service from '../../service/Service'

var service = new Service();

function getAllPatients() {
    return (dispatch, getState) => {
        //var service = new Service();
        service.loadData().then(res => res.json())
            .then(patient => {
                dispatch(setAllPatients(patient))
            })
    }
}

function searchPatients(value) {
    return (dispatch, getState) => {
        service.customSearchWord(value)
            .then(patient => dispatch(setAllPatients(patient)))
    }
}

function deletePatient(id) {
    return (dispatch, getState) => {
        service.deleteRow(id)
            .then(() => dispatch(getAllPatients()))
    }
}

export {
    getAllPatients,
    searchPatients,
    deletePatient
}