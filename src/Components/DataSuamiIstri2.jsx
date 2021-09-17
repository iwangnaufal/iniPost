import React, { Component, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import '../Styles/DataSuamiIstri.css'

const styles = theme => createStyles({
    root: {
        "& .MuiFormLabel-root": {
            // color: "red"
        }
    },
    label: {
        color: "#490E73",
        fontSize: "14px",
        fontWeight: 600,
        fontFamily: "Open Sans"
    },
    formControl: {
        left: 150,
        right: 150
    },
    text: {
        width: "641px"
    }
});

const PurpleSwitch = withStyles({
    switchBase: {
        color: purple[300],
        '&$checked': {
            color: purple[500],
        },
        '&$checked + $track': {
            backgroundColor: purple[500],
        },
    },
    checked: {},
    track: {},
})(Switch);

export class DataPembiayaanDimiliki extends Component {
    state = { checkedA: false, isYa: false }

    handleSwitch = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked })

    }
    handleKeuangan = (event) => {
        if (event.target.value === "jikaYa") {
            this.setState({ isYa: true })
            this.props.handleChange("pembiayaanLain")
        } else {
            this.setState({ isYa: false })
            this.props.handleChange("pembiayaanLain")
        }
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange, classes, handleKeuangan, isYa } = this.props;

        return (
            <div className="mainPage">
                <div className="mainForm">
                    <p className="judul">Data Pembiayaan yang Dimiliki Saat ini</p>
                    </div>
                    </div>
        )
    }
    export default withStyles(styles)(DataPembiayaanDimiliki);