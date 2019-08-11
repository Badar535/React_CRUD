import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import Service from '../../service/Service'


class InsUpdForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            p_f_name: "",
            p_l_name: "",
            p_email: "",
            p_phone: '',
            p_gender: ""
        }

        this.addRecordToJson = this.addRecordToJson.bind(this);

        // var service = new someclass()
        // service.dosometihng()
    }

    service = new Service();

    // componentDidMount() {
    //     // const id = this.props.match.params.id;
    //     //console.log(id)
    //     const id = this.props.id;
    //     if (id) {
    //         this.service.editRow(id)
    //             .then((datta) => {
    //                 this.setState({
    //                     id: datta.id,
    //                     p_f_name: datta.p_f_name,
    //                     p_l_name: datta.p_l_name,
    //                     p_email: datta.p_email,
    //                     p_phone: datta.p_phone,
    //                     p_gender: datta.p_gender
    //                 })
    //             })
    //     }
    // }

    setDataInState = (patientData) => {
        this.setState({
            id: patientData.id,
            p_f_name: patientData.p_f_name,
            p_l_name: patientData.p_l_name,
            p_email: patientData.p_email,
            p_phone: patientData.p_phone,
            p_gender: patientData.p_gender
        })
    }

    // updatePatient = (id, data) => {
    //     return fetch('http://localhost:4001/patient/' + id, {
    //         method: "PUT",
    //         headers: {
    //             'Content-Type': 'Application/json'
    //         },
    //         body: data
    //     })
    // }

    addRecordToJson(e) {
        e.preventDefault();
        const id = this.props.id;
        this.props.saveRecord(this.state, id);
        

        // if (this.state.id) {
        //     const id = this.state.id;
        //     this.props.updateRecord(this.state, id)
        //     // const data = JSON.stringify({
        //     //     "p_f_name": this.state.p_f_name,
        //     //     "p_l_name": this.state.p_l_name,
        //     //     "p_email": this.state.p_email,
        //     //     "p_phone": this.state.p_phone,
        //     //     "p_gender": this.state.p_gender
        //     // });
        //     // this.service.updatePatient(id, data)
        //     //     .then(() => this.props.history.push('/'))
        // } else {

        //     this.props.addRecord(this.state);
        //     // const data = JSON.stringify({
        //     //     "id": Math.floor((Math.random() + 1) * 0x100000),
        //     //     "p_f_name": this.state.p_f_name,
        //     //     "p_l_name": this.state.p_l_name,
        //     //     "p_email": this.state.p_email,
        //     //     "p_phone": this.state.p_phone,
        //     //     "p_gender": this.state.p_gender
        //     // })

        //     // this.service.addPatient(data)
        //     //     .then(() => this.props.history.push('/'))
        // }
    }

    firstNameOnChange = (arg) => {
        var value = arg.target.value;
        this.setState({ p_f_name: value })
    }

    lastNameOnChange = (arg) => {
        var value = arg.target.value;
        this.setState({ p_l_name: value })
    }

    emailOnChange = (arg) => {
        var value = arg.target.value;
        this.setState({ p_email: value })
    }

    phoneOnChange = (arg) => {
        var value = arg.target.value;
        this.setState({ p_phone: value })
    }

    genderOnChange = (arg) => {
        var value = arg.target.value;
        this.setState({ p_gender: value })
    }



    render() {
        return (
            <div className="container">
                <h1>Enter new Patient</h1>
                <form onSubmit={this.addRecordToJson}>
                    <div className="form-group">
                        <input type="text" name="f_name" id="f_name" placeholder="Enter Patient First Name" className="form-control" value={this.state.p_f_name} onChange={this.firstNameOnChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="l_name" id="l_name" placeholder="Enter Patient Last Name" className="form-control" value={this.state.p_l_name} onChange={this.lastNameOnChange} required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Enter Patient Email" className="form-control" value={this.state.p_email} onChange={this.emailOnChange} required />
                    </div>
                    <div className="form-group">
                        <input type="number" maxLength="11" name="phone" id="phone" placeholder="Enter Patient Phone Number" value={this.state.p_phone} className="form-control" onChange={this.phoneOnChange} required />
                    </div>
                    {/* <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Male" defaultChecked />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Male
                        </label>
                    </div>
                    <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Female" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Female
                        </label>
                    </div> */}

                    {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Gender
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}

                    <Form.Control value={this.state.p_gender} as="select" onChange={this.genderOnChange}>
                        <option>Choose Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Control>

                    <div className="form-group">
                        <input type="submit" value="Add New Patient" className="btn btn-primary btn-block" />
                    </div>

                </form>
            </div>
        );
    }
}


export default InsUpdForm;