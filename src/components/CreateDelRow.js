import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Service from '../service/Service'



class CreateRow extends Component {

    service = new Service();
    deleteRecordd = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.deleteRecordFromJson()

                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    deleteRecordFromJson = () => {
        //debugger;
        const id = this.props.pat.id;
        this.props.deleteR(id)
        // this.service.deleteRow(id)
        //     .then(() => this.props.reLoadData())
        // .then(() => {
        //     fetch('http://localhost:4000/patient')
        //         .then(res => res.json())
        //         .then(tasks => this.props.onDel(tasks))
        //         .catch(err => console.log(err))
        // })
        //     .catch(err => console.log(err))
    }

    editRecord = () => {

        const id = this.props.pat.id;
        this.props.setId(id)

        this.props.history.push('/insupd/' + id)
    }

    render() {
        const pat = this.props.pat;
        //const fun = this.props.editRec(pat.id);
        return (
            <tr key={pat.id}>
                <td>{pat.p_f_name} {pat.p_l_name}</td>
                <td>{pat.p_email}</td>
                <td>{pat.p_phone}</td>
                <td>{pat.p_gender}</td>
                <td><Button variant="outline-primary" onClick={this.editRecord}>Edit</Button></td>
                <td><Button variant="outline-danger" onClick={this.deleteRecordd} >Delete</Button></td>
            </tr>
        );
    }
}

export default CreateRow;