
import { setPatientsSerBox, toggleLoading } from '../actions/searchBoxPatientActions'
import Service from '../../service/Service'

function getPatientsSerBox(value) {
    return (dispatch, getState) => {
        if (!value) {
            dispatch(setPatientsSerBox([]))
        }
        else {
            dispatch(toggleLoading(true));
            
            var service = new Service();
            service.customSearchWord(value)
                .then(patient => {
                    dispatch(setPatientsSerBox(patient))

                    dispatch(toggleLoading(false));
                })
        }
    }
}

export {
    getPatientsSerBox
}