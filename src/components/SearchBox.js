import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Service from '../service/Service'

import { connect } from 'react-redux'
import {  setPatientsSerBox, toggleSearchbox, toggleLoading } from '../appState/actions/searchBoxPatientActions'

import {getPatientsSerBox} from '../../src/appState/thunks/searchBoxThunk'

class SearchBox extends Component {
    _mounted = false;

    constructor(props) {
        super(props);
    }

    service = new Service();

    componentDidMount() {
        this._mounted = true;
    }
    componentWillUnmount() {
        this._mounted = false;
    }

    // ulStyle = () => {
    //     text
    // }

    onSearchChange = (e) => {
        var value = e.target.value;

        this.props.getPatientsSerBox(value);

        // if (!value) {
        //     this.props.setPatientsSerBox([])
        // }
        // else {
        //     //console.log(value)

        //     this.props.toggleLoading(true);

        //     this.service.customSearchWord(value)
        //     .then(patient => {
        //             this.props.setPatientsSerBox(patient)

        //             this.props.toggleLoading(false);
        //             //this.setState({ open: patient.length > 0 })
        //         }) //, open: patient.length > 0
        // }

        

    }

    onFocus = () => {
        if (this.props.searchBoxpatients.patientsList.length > 0) {
            //this.setState({ open: true })
            this.props.toggleSearchbox(true);
        }
    }

    onBlur = () => {
        setTimeout(() => {
            if (this._mounted) {
                //this.setState({ open: false })
                this.props.toggleSearchbox(false);
                //this.props.toggleLoading(true)
            }
        }, 500);
    }

    itemClikc = () => {
        console.log("item click")
    }

    render() {
       // const { open } = this.state;
        const {patientsList, open, isLoading} = this.props.searchBoxpatients;
        const patientUL = patientsList.map(pat => <li key={pat.id} className="list-group-item"><Link onClick={this.itemClikc} to={'/insupd/' + pat.id}>{pat.p_f_name} {pat.p_l_name}</Link></li>)
        return (
            <div>

            {isLoading && <div><p>is loading .....</p></div>}

                <input type="text" id="tosearch" name="tosearch" onChange={this.onSearchChange} onFocus={this.onFocus} onBlur={this.onBlur} />
                {open && <ul className="list-group position-absolute" >
                    {patientUL}
                </ul>}

                

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchBoxpatients: state.searchBoxPatient
    }
}

function mapDispatchToProps() {
    return {
        getPatientsSerBox, setPatientsSerBox, toggleSearchbox, toggleLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(SearchBox);