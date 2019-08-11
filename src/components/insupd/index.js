import React, { Component } from 'react';

import { connect } from 'react-redux'
import Service from '../../service/Service'
import InsUpdForm from './insupdForm'

import { setPatientDetails, resetEditPatient } from '../../appState/actions/editPatientsAction'

import { addRecord, editRecord } from '../../appState/thunks/editPatientThunk'


class IndexInsUpd extends Component {
    constructor(props) {
        super(props);
        //this.myRef = React.createRef();
    }



    service = new Service();
    patientDetails = null

    componentDidMount() {
        const id = this.props.editPatient.patientId
        console.log("id is " + id)

        if (id) {
            this.service.editRow(id)
                .then((datta) => this.props.setPatientDetails(datta))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.editPatient.patientDetails !== this.patientDetails) {
            this.patientDetails = this.props.editPatient.patientDetails
            //setDatainState using ref
            // this.myRef = React.createRef();
            this.myRef.setDataInState(this.props.editPatient.patientDetails)
        }
        
        if(this.props.editPatient.patientSaved){
            this.props.history.push('/');
        }
    }

    componentWillUnmount(){
        this.props.resetEditPatient();
    }

    saveRecord = (patient, id) => {
        //const id = this.props.match.params.id;
        if (id) {
            this.props.editRecord(patient)
            //console.log("id is " + this.props.editPatient.patientId)
        } else {
            this.props.addRecord(patient)
        }
    }


    // addRecord = (patient) => {





    //     // const data = JSON.stringify({
    //     //     "id": Math.floor((Math.random() + 1) * 0x100000),
    //     //     "p_f_name": patient.p_f_name,
    //     //     "p_l_name": patient.p_l_name,
    //     //     "p_email": patient.p_email,
    //     //     "p_phone": patient.p_phone,
    //     //     "p_gender": patient.p_gender
    //     // })

    //     // this.service.addPatient(data)
    //     //     .then(() => this.props.history.push('/'))
    // }

    // updateRecord = (patient) => {


    //     // const data = JSON.stringify({
    //     //     "p_f_name": patient.p_f_name,
    //     //     "p_l_name": patient.p_l_name,
    //     //     "p_email": patient.p_email,
    //     //     "p_phone": patient.p_phone,
    //     //     "p_gender": patient.p_gender
    //     // });
    //     // this.service.updatePatient(id, data)
    //     //     .then(() => this.props.history.push('/'))
    // }


    render() {
        const id = this.props.match.params.id;
        return (
            <InsUpdForm id={id} saveRecord={this.saveRecord} ref={(obj) => this.myRef = obj} />
        );
    }
}

function mapStateToProps(state) {
    return {
        editPatient: state.editPatients
    }
}

function mapDispatchToProps() {
    return {
        setPatientDetails, addRecord, editRecord, resetEditPatient
    }
}


export default connect(mapStateToProps, mapDispatchToProps())(IndexInsUpd);
