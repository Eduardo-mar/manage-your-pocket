import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getTypes } from '../api/types';
import { getAccounts } from '../api/accounts';
import { getRecords } from '../api/records';
import Record from './Record';
//Librerías FAB
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class RecordsList extends Component {

    constructor() {
        super();
        this.state = {
            types: [],
            accounts: [],
            records: [],
        }
        this.nRecords= 0;
    }

    async componentDidMount() {
        const dataRecords = await getRecords();
        const dataTypes = await getTypes();
        const dataAccounts = await getAccounts();
        const records = dataRecords.data.map((record, index) => ({
            ...record,
            key: index,
        }));
        this.nRecords = records.length;
        this.setState({ types: dataTypes.data, accounts: dataAccounts.data, records });
    }

    updateId = (id, key) => {
        const records = this.dup(this.state.records);
        records[key]._id=id;
        this.setState({records});
        console.log(records[key]._id)
    }

    dup = (o) => {
        // "string", number, boolean
        if(typeof(o) !== "object" || !o) {
            return o;
        }
        
        var r = (o instanceof Array) ? [] : {};
        for(var i in o) {
            if(o.hasOwnProperty(i)) {
                r[i] = this.dup(o[i]);
            }
        }
        return r;
    }

    deleteRecord = (key) => {
        console.log(key);
        const records = this.dup(this.state.records);
        records.splice(key, 1);
        console.log(records);
        this.setState({records: records});
    }

    render() {

        const mystyle = {
            position: 'fixed',
            top: '2rem',
            right: '2rem'
        }

        return this.state.types.length && this.state.accounts.length ?
            <React.Fragment>
                <Fab onClick={() => {
                    this.setState({
                        records: [...this.state.records, {
                            _id: '',
                            date: undefined,
                            type: '',
                            concept: '',
                            place: '',
                            account: '',
                            valuesNumberFormat: {
                                numberformat: undefined,
                            },
                            key: this.nRecords,
                        }]
                    });
                    this.nRecords++;
                }} style={mystyle} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                {
                    this.state.records.map((element, index) => (
                        <Record
                            updateId={(id)=> this.updateId(id, index)}
                            deleteRecord={() => this.deleteRecord(index)}
                            key={element.key}
                            _id={element._id}
                            typeList={this.state.types}
                            accountList={this.state.accounts}
                            date={element.date}
                            type={element.type}
                            concept={element.concept}
                            place={element.place}
                            account={element.account}
                            amount={element.amount} />
                    ))
                }</React.Fragment> :

            <Backdrop open={true} >
                <CircularProgress color="inherit" />
            </Backdrop>

    }
}

export default RecordsList;