
class Service {
    updatePatient = (id, data) => {
        return fetch('https://localhost:44387/api/Patients/Update/' + id, {
            method: "PUT",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: data
        })
    }


    addPatient = (data) => {
        return fetch('https://localhost:44387/api/Patients/Create', {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: data
        })
    }


    loadData = () => {
        return fetch('https://localhost:44387/api/Patients/getall')
        // return fetch('http://localhost:4001/patient')
    }

    deleteRow = (id) => {
        return fetch('https://localhost:44387/api/Patients/Remove/' + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'Application/json'
            }
        })
    }


    customSearchWord = (value) => {
        return fetch('https://localhost:44387/api/Patients/Search?q=' + value)
        .then(res => res.json())

    }


    editRow =(id) => {
        return fetch('https://localhost:44387/api/Patients/GetByID/' + id)
        .then(res => res.json())
    }


}

export default Service;