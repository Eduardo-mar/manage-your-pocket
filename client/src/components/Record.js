import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Save and delete functions
import { saveRecords } from '../api/records';
import { deleteRecords } from '../api/records';
// Librerías Calendario
import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// Librerías Select
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//Librerías TextField
import TextField from '@material-ui/core/TextField';
//Librerías NumberField
import NumberFormatCustom from './NumberFormatCustom';
//Librerías Delete Button
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
// Librería iconButton y ToolTip
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import styled from 'styled-components';
import styles from '../styles/Record.styles';


class Record extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: props._id,
            date: props.date,
            type: props.type,
            concept: props.concept,
            place: props.place,
            account: props.account,
            valuesNumberFormat: {
                numberformat: props.amount,
            },
        }
    }

    render() {
        if (this.props.concept === 'New car') {
            console.log('props', this.props.date);
            console.log('state', this.state.date);
        }
        return (
            <div className={this.props.className}>
                <Tooltip title="Delete">
                    <IconButton
                        onClick={() => {
                            if (this.state._id) {
                                deleteRecords(this.state._id)
                                this.props.deleteRecord()
                            } else {
                                this.props.deleteRecord()
                            }
                        }}
                        variant="contained"
                        color="secondary"
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>


                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        className="date"
                        label="Date"
                        format="dd/MM/yyyy"
                        value={this.state.date}
                        onChange={(date) => {
                            this.setState({ date: date })
                        }}
                    />
                </MuiPickersUtilsProvider>

                <FormControl className="type">
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={this.state.type}
                        onChange={(type) => {
                            this.setState({ type: type.target.value })
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {this.props.typeList.map(type => (
                            <MenuItem key={type._id} value={type._id}>{type.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField className="text" label="Concept" value={this.state.concept} onChange={(concept) => {
                    concept.persist();
                    this.setState({ concept: concept.target.value })
                }} />

                <FormControl className="account">
                    <InputLabel>Account</InputLabel>
                    <Select
                        value={this.state.account}
                        onChange={(account) => {
                            this.setState({ account: account.target.value })
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {this.props.accountList.map(account => (
                            <MenuItem key={account._id} value={account._id}>{account.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField className="text" label="Place" value={this.state.place} onChange={(place) => {
                    place.persist();
                    this.setState({ place: place.target.value })
                }} />

                <TextField
                    className="amount"
                    label="Amount"
                    value={this.state.valuesNumberFormat.numberformat}
                    onChange={(event) => {
                        this.setState({
                            valuesNumberFormat: {
                                ...this.state.valuesNumberFormat,
                                [event.target.name]: parseFloat(event.target.value),
                            }
                        });
                    }}
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                {!this.state._id ||
                    this.props.date.getTime() !== this.state.date.getTime() ||
                    this.props.type !== this.state.type ||
                    this.props.concept !== this.state.concept ||
                    this.props.place !== this.state.place ||
                    this.props.account !== this.state.account ||
                    this.props.amount !== this.state.valuesNumberFormat.numberformat
                    ?
                    <Tooltip title="Save">
                    <IconButton
                        onClick={() => saveRecords({
                            _id: this.state._id,
                            date: this.state.date,
                            type: this.state.type,
                            concept: this.state.concept,
                            place: this.state.place,
                            account: this.state.account,
                            amount: this.state.valuesNumberFormat.numberformat,
                        })
                            .then(res => { this.props.updateId(res.data) })}
                        className="Save"
                        variant="contained"
                    >
                        <SaveIcon className="save" />
                    </IconButton>
                    </Tooltip> :
                    null
                }


            </div >
        )

    }
}

Record.propTypes = {
    typeList: PropTypes.array,
    accountList: PropTypes.array,
    _id: PropTypes.string,
    date: PropTypes.string,
    concept: PropTypes.string,
    place: PropTypes.string,
    type: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    account: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    amount: PropTypes.number,
    className: PropTypes.string.isRequired,
    deleteRecord: PropTypes.func,
    updateId: PropTypes.func,
}

export default styled(Record)([styles]);