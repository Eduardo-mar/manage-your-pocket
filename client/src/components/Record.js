import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Librerías Calendario
import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// Librerías Select
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//Librerías TextField
import TextField from '@material-ui/core/TextField';
//Librerías NumberField
import NumberFormatCustom from './NumberFormatCustom';

import styled from 'styled-components';
import styles from '../styles/Record.styles';


class Record extends Component {

    constructor() {
        super();
        this.state = {
            date: undefined,
            type: '',
            account: '',
            valuesNumberFormat: {
                numberformat: undefined,
            },
        }
    }


    render() {

        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        label="Date"
                        format="dd/MM/yyyy"
                        value={this.state.date}
                        onChange={(date) => {
                            this.setState({ date: date })
                        }}
                    />
                </MuiPickersUtilsProvider>

                <FormControl >
                    <InputLabel id="type">Type</InputLabel>
                    <Select
                        value={this.state.type}
                        onChange={(type) => {
                            console.log(type);
                            this.setState({ type: type.target.value })
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {this.props.type.map(type => (
                            <MenuItem key={type._id} value={type._id}>{type.name}</MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>You can't find your type? you can add more!</FormHelperText>
                </FormControl>

                <TextField id="Concept" label="Concept" />

                <FormControl >
                    <InputLabel id="acoount">Account</InputLabel>
                    <Select
                        value={this.state.account}
                        onChange={(account) => {
                            this.setState({ account: account.target.value })
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {this.props.account.map(account => (
                            <MenuItem key={account._id} value={account._id}>{account.name}</MenuItem>
                        ))}
                        </Select>
                    <FormHelperText>You can't find your Account? you can add more!</FormHelperText>
                </FormControl>

                <TextField
                    label="Amount"
                    value={this.state.valuesNumberFormat.numberformat}
                    onChange={(event) => {
                        this.setState({valuesNumberFormat: {
                            ...this.state.valuesNumberFormat,
                            [event.target.name]: event.target.value,
                        }});
                    }}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />


            </div >
        )

    }
}

Record.propTypes = {
    type: PropTypes.array,
    account: PropTypes.array,
}

export default styled(Record)([styles]);