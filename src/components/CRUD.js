import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { MDBCol } from "mdbreact";

import CreateDelRow from './CreateDelRow';
import Service from '../service/Service';
import SearchBox from './SearchBox'

import { connect } from 'react-redux'
import { getAllPatients, searchPatients, deletePatient } from '../appState/thunks/patientsThunks'

import { setPatientId } from '../appState/actions/editPatientsAction'
import {resetPatient} from './../appState/actions/patientsActions'

class CRUD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: [],
            search: ""
        }

    }

    service = new Service();

    componentDidMount() {
        this.loadData();
    }

    componentWillUnmount(){
        this.props.resetPatient();
    }

    loadData = () => {
        // this.props.dispatch(getAllPatients());
        this.props.getAllPatients();
        // this.service.loadData().then(res => res.json())
        //     .then(patient => {
        //         //this.setState({ patient });
        //         //this.props.dispatch(setAllPatients(patient))
        //         this.props.setAllPatients(patient)
        //     })
        //     .catch(err => console.log(err))
    }

    btnCreateRecord = () => {
        this.props.history.push('/insupd');
    }

    btnUpdateRecord = (id) => {
        this.props.history.push('/insupd/' + id)
    }

    renderTableHead() {
        return <thead>
            <tr>
                <th>Patient Name</th>
                <th>Email</th>
                <th>Phone NO</th>
                <th>Gender</th>
                <th>Edit Button</th>
                <th>Delete Button</th>
            </tr>
        </thead>
    }

    renderTableBody = () => {
        return <tbody>
            {
                this.props.patients.patientsList.map(pat => <CreateDelRow key={pat.id} pat={pat} deleteR={this.props.deletePatient} history={this.props.history} setId={this.props.setPatientId} />)   //reLoadData={this.loadData}
            }
        </tbody>
    }

    searchWord = (arg) => {
        var value = arg.target.value;
         this.setState({ search: value })
         
        this.props.searchPatients(value);
        // this.service.customSearchWord(value)
        //     .then(patient => this.props.setAllPatients(patient))    //this.setState({ patient }))
    }


    render() {
        //const patient = this.state.patient.map(pat => <CreateRow key={pat.id} pat={pat} reLoadData={this.loadData}/>)
        return (
            <div className="container-fluid">
                <h1>List of Patient in json file</h1>
                <SearchBox />
                <Button variant="outline-primary" onClick={this.btnCreateRecord}>Add new Patient</Button>
                <MDBCol md="6" className="float-right">
                    <input className="form-control" id="search" name="search" type="text" placeholder="Search" aria-label="Search" value={this.state.search} onChange={this.searchWord} />
                </MDBCol>
                <Table striped bordered hover variant="dark">
                    {this.renderTableHead()}
                    {this.renderTableBody()}
                </Table>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        patients: state.patients,
        //editPatient: state.editPatients
    }
}

function mapDispatchToProps() {
    return {
        setPatientId, getAllPatients, searchPatients, deletePatient, resetPatient
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(CRUD);