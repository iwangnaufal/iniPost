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

function Footer(props) {
    const {nextStep,prevStep} = props
    const lanjut = e => {
        // e.preventDefault();
        props.nextStep();
    };
    
    const back = e => {
        // e.preventDefault();
        // props.prevStep();
    };
    return(
        <footer id='formButton'>
                <Button
                    id='bckBtn'
                    color="secondary"
                    variant="contained"
                    onClick={back()}
                >Kembali</Button>

                <Button
                    id='nxtBtn'
                    color="primary"
                    variant="contained"
                    onClick={lanjut()}
                >Lanjut</Button>
        </footer>
    )
}

export default Footer