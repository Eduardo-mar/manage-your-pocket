import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { getTypes } from '../api/types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getAccounts } from '../api/accounts';
import Record from './Record';


class RecordsList extends Component {

    constructor() {
        super();
        this.state = {
            types: [],
            accounts: [],
        }
    }

    async componentDidMount() {
        const dataTypes = await getTypes();
        const dataAccounts = await getAccounts();
        this.setState({ types: dataTypes.data, accounts: dataAccounts.data });
    }

    render() {
        return this.state.types.length && this.state.accounts.length ?
            <Record  type={this.state.types} account={this.state.accounts}/> :
            <Backdrop open={true} >
                <CircularProgress color="inherit" />
            </Backdrop>
    }
}

export default RecordsList;