import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getTypes } from '../api/types';
import { getAccounts } from '../api/accounts';
import { getRecords } from '../api/records';
import Record from './Record';
//Librerías FAB
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import styled from 'styled-components';
import styles from '../styles/RecordsList.styles';

class RecordsList extends Component {

    constructor() {
        super();
        this.state = {
            types: [],
            accounts: [],
            records: [],
        }
        this.nRecords = 0;
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

    updateId = (data, key) => {
        const records = this.dup(this.state.records);
        records[key] = data;
        this.setState({ records });
        console.log(records[key].date)
    }

    dup = (o) => {
        // "string", number, boolean
        if (typeof (o) !== "object" || !o) {
            return o;
        }

        var r = (o instanceof Array) ? [] : {};
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
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
        this.setState({ records: records });
    }

    render() {

        return <div className={this.props.className}>
            {this.state.types.length && this.state.accounts.length ?
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
                    }} className="mystyle" color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <div className="recordstyle">
                        {
                            this.state.records.map((element, index) => (
                                <Record
                                    updateId={(id) => this.updateId(id, index)}
                                    deleteRecord={() => this.deleteRecord(index)}
                                    key={element.key}
                                    _id={element._id}
                                    typeList={this.state.types}
                                    accountList={this.state.accounts}
                                    date={new Date(element.date)}
                                    type={element.type}
                                    concept={element.concept}
                                    place={element.place}
                                    account={element.account}
                                    amount={element.amount} />
                            ))
                        }</div>
                </React.Fragment> :

                <Backdrop open={true} >
                    <CircularProgress color="inherit" />
                </Backdrop>}
        </div>

    }
}

RecordsList.propTypes = {
    className: PropTypes.string.isRequired,
}

export default styled(RecordsList)([styles]);