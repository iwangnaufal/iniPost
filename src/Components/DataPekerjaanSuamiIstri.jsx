import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CurrencyInput from './CurrencyInput';
import { makeStyles } from "@material-ui/core/styles";
import { Select, FormControl, InputLabel } from "@material-ui/core";
import '../Styles/DataSuamiIstri.css'
import Footer from './Footer'


function DataPekerjaanSuamiIstri (props) {

    const{nextStep,prevStep,values,handleChange} = props
    const lanjut = e => {
        e.preventDefault();
        props.nextStep();
    };
    
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };
   
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(0),
          width: 450
        },
        text: {
            width: '94%'
        }
    }));
    const classes = useStyles();

    return (
        <div id='mainPage'>
            <div id='mainForm'>
                <p className="judul">Data Pekerjaan Suami / Istri</p>
                <div id='formContainer'>
                    <div id='firstSubformContainer'>
                        <text className="subformTitle">Lama Bekerja</text>
                        <TextField
                            placeholder="Masukan Lama Bekerja dalam Tahun"
                            name='lamaBekerjaSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.lamaBekerjaSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Jenis Pekerjaan</text>
                        <TextField
                            placeholder="Masukan Jenis Pekerjaan"
                            name='jenisPekerjaanSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.jenisPekerjaanSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Status Pekerjaan</text>
                        <FormControl className={classes.formControl}>
                            <TextField
                                label={values.statusPekerjaanSuamiIstri === "" ? "Masukan Status Pekerjaan" : ""}
                                className={classes.text}
                                name='statusPekerjaanSuamiIstri'
                                InputLabelProps={{ shrink: false }}
                                onChange={handleChange}
                                defaultValue={values.statusPekerjaanSuamiIstri}
                                select
                                margin='dense'>
                                <MenuItem value="Karyawan Tetap">Karyawan Tetap</MenuItem>
                                <MenuItem value="Karyawan Kontrak">Karyawan Kontrak</MenuItem>
                            </TextField>
                        </FormControl>
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Data Perusahaan</text>
                        <TextField
                            placeholder="Masukan Nama Perusahaan"
                            name='namaPerusahaanSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.namaPerusahaanSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                        <TextField
                            placeholder="Masukan Kantor / Tempat Usaha"
                            name='tempatUsahaSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.tempatUsahaSuamiIstri}
                            fullWidth
                        />
                        <TextField
                            placeholder="Masukan Kategori Instansi"
                            name='kategoriInstansiSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.kategoriInstansiSuamiIstri}
                            fullWidth
                        />
                        <TextField
                            placeholder="Masukan Bidang Usaha"
                            name='bidangUsahaSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.bidangUsahaSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                        <TextField
                            placeholder="Masukan Jumlah Karyawan"
                            name='jumlahKaryawanSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.jumlahKaryawanSuamiIstri}
                            fullWidth
                        />
                        <TextField
                            placeholder="Masukan Telepon Kantor"
                            name='teleponKantorSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.teleponKantorSuamiIstri}
                            fullWidth
                        />
                        <TextField
                            placeholder="Masukan Telepon HRD"
                            name='teleponHrdSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.teleponHrdSuamiIstri}
                            fullWidth
                        />
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Jabatan</text>
                        <TextField
                            placeholder="Masukan Jabatan Saat Ini"
                            name='jabatanSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.jabatanSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Pendapatan per Bulan</text>
                        <CurrencyInput
                            id='currencyContainer'
                            name='pendapatanBulananSuamiIstri'
                            placeholder="Rp|0"
                            onChange={handleChange}
                            defaultValue={values.pendapatanBulananSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Pembayaran Gaji</text>
                        <FormControl className={classes.formControl}>
                            <TextField
                                label={values.pembayaranGajiSuamiIstri === "" ? "Masukan Cara Pembayaran Gaji" : ""}
                                className={classes.text}
                                name='pembayaranGajiuamiIstri'
                                InputLabelProps={{ shrink: false }}
                                onChange={handleChange}
                                defaultValue={values.pembayaranGajiSuamiIstri}
                                select
                                margin='dense'>
                                <MenuItem value="Transfer Bank Muamalat">Transfer Bank Muamalat</MenuItem>
                                <MenuItem value="Transfer Bank Lain">Transfer Bank Lain</MenuItem>
                            </TextField>
                        </FormControl>
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Alamat Email HRD</text>
                        <TextField
                            placeholder="Masukan Alamat Email HRD"
                            name='emailHrdSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.emailHrdSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Alamat Email Atasan</text>
                        <TextField
                            placeholder="Masukan Alamat Email Atasan"
                            name='emailAtasanSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.emailAtasanSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                    </div>

                    <div className='subformContainer'>
                        <div id='phoneTitleContainer'>
                            <text className="subformTitle">No. Telepon Atasan</text>
                        </div>
                        <PhoneInput
                            international
                            defaultCountry="ID"
                            name='teleponAtasanSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.teleponAtasanSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
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

export default DataPekerjaanSuamiIstri