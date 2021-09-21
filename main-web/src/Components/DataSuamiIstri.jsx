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
import Footer from './Footer'

// const dates = [
//     {value: '1'},{value: '2'},{value: '3'},{value: '4'},{ value: '5'},
//     { value: '6'},{ value: '7'},{ value: '8'},{ value: '9'},{ value: '10'},
//     { value: '11'},{ value: '12'},{ value: '13'},{ value: '14'},{ value: '15'},
//     { value: '16'},{ value: '17'},{value: '18'},{value: '19'},{value: '20'},
//     {value: '21'},{value: '22'},{value: '23'},{value: '24'},{value: '25'},
//     {value: '26'},{value: '27'},{value: '28'},{value: '29'},{value: '30'},
//     {value: '31'}
// ];

function DataSuamiIstri (props) {
    const {nextStep,prevStep,values,handleChange} = props
    const lanjut = e => {
        e.preventDefault();
        nextStep();
        console.log('nama suami/istri: ',values.namaSuamiIstri)
        console.log('tempat lahir suami/istri: ',values.tempatLahirSuamiIstri)
        console.log('tanggal lahir suami/istri: ',values.tanggalLahirSuamiIstri)
        console.log('nomor ktp suami/istri: ',values.nomorKTPSuamiIstri)
        console.log('nomor npwp suami/istri: ',values.nomorNPWPSuamiIstri)
        console.log('pekerjaan suami/istri: ',values.pekerjaanSuamiIstri)
        console.log('nomor telpon suami/istri: ',values.nomorTelponSuamiIstri)
    };
    
    const back = e => {
        e.preventDefault();
        prevStep();
    };
    
    // const [state, setState] = useState({
    //     namaSuamiIstri: '',
    //     tempatLahirSuamiIstri: '',
    //     tanggalLahirSuamiIstri: '',
    //     nomorKTPSuamiIstri: '',
    //     nomorNPWPSuamiIstri: '',
    //     pekerjaanSuamiIstri: '',
    //     nomorTelponSuamiIstri: ''
    // })
    // const [tlp,setTlp] = useState({nomorTelponSuamiIstri: ''})
    // const {namaSuamiIstri, tempatLahirSuamiIstri, tanggalLahirSuamiIstri, nomorKTPSuamiIstri, nomorNPWPSuamiIstri, pekerjaanSuamiIstri,nomorTelponSuamiIstri} = state
    // const state = {namaSuamiIstri, tempatLahirSuamiIstri, tanggalLahirSuamiIstri, nomorKTPSuamiIstri, nomorNPWPSuamiIstri, pekerjaanSuamiIstri,nomorTelponSuamiIstri}
    // const handleChange = e => {
    //     const name = e.target.name
    //     setState({ [name]: e.target.value });
    // };
    
    return (
        <div id='mainPage'>
            <div id='mainForm'>
                <p className="judul">Data Suami / Istri</p>
                <div id='formContainer'>
                    <div id='firstSubformContainer'>
                        <text className="subformTitle">Nama Lengkap Sesuai KTP</text>
                        <TextField
                            placeholder="Masukan Nama Lengkap Sesuai KTP"
                            name='namaSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.namaSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                        {/* {console.log('nama suami/istri: ',state.namaSuamiIstri)} */}
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Tempat/Tanggal Lahir</text>
                        <TextField
                            multiline
                            name='tempatLahirSuamiIstri'
                            placeholder="Masukan Tempat/Tanggal Lahir"
                            onChange={handleChange}
                            defaultValue={values.tempatLahirSuamiIstri}
                            fullWidth
                            margin='dense'
                        /> 
                        {/* {console.log ('tempat lahir :',state.tempatLahirSuamiIstri)} */}
                        <TextField
                            id="date"
                            helperText="Masukan Tanggal Lahir Suami/Istri"
                            name='tanggalLahirSuamiIstri'
                            onChange={handleChange}
                            // onChange={(e) => setState(e.target.value)}
                            defaultValue={values.tanggalLahirSuamiIstri}
                            type="date"
                            margin='dense'
                        />
                        {/* {console.log('tangal lahir: ',state.tanggalLahirSuamiIstri)} */}
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Nomor KTP</text>
                        <TextField
                            placeholder="Masukan 16 digit Nomor KTP"
                            name='nomorKTPSuamiIstri'
                            onChange={handleChange}
                            // onChange={(e) => setState(e.target.value)}
                            defaultValue={values.nomorKTPSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                        {/* {console.log('nomor ktp: ',state.nomorKTPSuamiIstri)} */}
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Nomor NPWP</text>
                        <TextField
                            placeholder="Masukan Nomor NPWP"
                            name='nomorNPWPSuamiIstri'
                            onChange={handleChange}
                            // onChange={(e) => setState(e.target.value)}
                            defaultValue={values.nomorNPWPSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                        {/* {console.log('nomor npwp: ',state.nomorNPWPSuamiIstri)} */}
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Pekerjaan</text>
                        <TextField
                            placeholder="Masukan Pekerjaan Saat Ini"
                            name='pekerjaanSuamiIstri'
                            onChange={handleChange}
                            // onChange={(pekerjaanSuamiIstri) => setState(pekerjaanSuamiIstri.target.value)}
                            defaultValue={values.pekerjaanSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                        {/* {console.log('pekerjaan: ',state.pekerjaanSuamiIstri)} */}
                    </div>

                    <div className='subformContainer'>
                        <div id='phoneTitleContainer'>
                            <text className="subformTitle">No. Handphone</text>
                        </div>
                        <PhoneInput
                            international
                            defaultCountry="ID"
                            name='nomorTelponSuamiIstri'
                            onChange={handleChange}
                            // onChange={(e) => setState(e.target.value)}
                            value={values.nomorTelponSuamiIstri}
                            margin='dense'
                        />
                        {/* {console.log('no.tlpn: ',state.nomorTelponSuamiIstri)} */}
                    </div>
                </div>
                <footer id='formButton'>
                    <Button
                        id='bckBtn'
                        color="secondary"
                        variant="contained"
                        onClick={back}
                    >Kembali</Button>

                    <Button
                        id='nxtBtn'
                        color="primary"
                        variant="contained"
                        onClick={lanjut}
                    >Lanjut</Button>
                </footer>
            </div>
        </div>
            
    );
}

export default DataSuamiIstri