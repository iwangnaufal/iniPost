import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid, FormControlLabel, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { DatePicker } from "@material-ui/pickers";
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';


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

export class FormDataKerabat extends Component {
    state = {checkedA: false, isKerabat: false}

    handleSwitch = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked })
        this.props.handleAlamatSama();
    }

    handleKerabat = (event) => {
        if (event.target.value === "hubunganLainnya") {
            this.setState({ isLainnya: true })
            this.props.handleChange("hubunganDenganNasabah")
        } else {
            this.setState({ isLainnya: false })
            this.props.handleChange("hubunganDenganNasabah")
        }
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange, handleKerabat, classes,
            daftarProvinsi, daftarKabupatenKota,
            daftarKecamatan, daftarKelurahan,
            handleProvinsi, handleKabupatenKota,
            handleKecamatan, handleKelurahan,
            provinsiTerpilih, kabupatenKotaTerpilih,
            kecamatanTerpilih, kelurahanTerpilih, isKerabat } = this.props;

        return (
            <div className="mainPage">
                <div className="mainForm">
                    <p className="judul">Data Kerabat yang Bisa Dihubungi</p>
                    <br />
                    <br />
                    <AppBar title="Masukkan Data Kerabat yang Bisa Dihubungi" />
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Nama</FormLabel>
                        <TextField
                            className={classes.text}
                            placeholder="Masukkan Nama Lengkap "
                            onChange={handleChange('namaKerabat')}
                            defaultValue={values.namaKerabat}
                            margin="normal"
                        />
                    </FormControl>
                    <br />
                    <br />

                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Alamat Tempat Tinggal Saat Ini</FormLabel>
                        <TextField
                            placeholder="Masukkan Alamat Properti"
                            onChange={handleChange('alamatKerabat')}
                            className={classes.text}
                            defaultValue={values.alamatKerabat}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label={values.provinsiKerabat === "" ? "Pilih Provinsi" : ""}
                            InputLabelProps={{ shrink: false }}
                            onChange={handleChange('provinsiKerabat')}
                            // onChange="handleChange('pilihProvinsiifPembiayaanProperti'); this.setState({provinsiTerpilih: values.pilihProvinsiifPembiayaanProperti});"
                            className={classes.text}
                            defaultValue={values.provinsiKerabat}
                            margin="normal"
                            fullWidth
                            select >
                            {
                                daftarProvinsi.map((provinsi) =>
                                    <MenuItem
                                        key={provinsi.id}
                                        value={provinsi.id}
                                        onClick={handleProvinsi(provinsi)}>
                                        {provinsi.nama}
                                    </MenuItem>)
                            }
                        </TextField>
                        <TextField
                            disabled={provinsiTerpilih == null}
                            label={values.kotaKerabat === "" ? "Pilih Kabupaten / Kota" : ""}
                            InputLabelProps={{ shrink: false }}
                            onChange={handleChange('kotaKerabat')}
                            className={classes.text}
                            defaultValue={values.kotaKerabat}
                            margin="normal"
                            fullWidth
                            select>
                            {
                                daftarKabupatenKota.map((kota_kabupaten) =>
                                    <MenuItem
                                        key={kota_kabupaten.id}
                                        value={kota_kabupaten.id}
                                        onClick={handleKabupatenKota(kota_kabupaten)}>
                                        {kota_kabupaten.nama}
                                    </MenuItem>)
                            }
                        </TextField>
                        <TextField
                            disabled={kabupatenKotaTerpilih == null}
                            label={values.kecamatanKerabat === "" ? "Pilih Kecamatan" : ""}
                            InputLabelProps={{ shrink: false }}
                            onChange={handleChange('kecamatanKerabat')}
                            className={classes.text}
                            defaultValue={values.kecamatanKerabat}
                            margin="normal"
                            fullWidth
                            select>
                            {
                                daftarKecamatan.map((kecamatan) =>
                                    <MenuItem
                                        key={kecamatan.id}
                                        value={kecamatan.id}
                                        onClick={handleKecamatan(kecamatan)}>
                                        {kecamatan.nama}
                                    </MenuItem>)
                            }
                        </TextField>
                        <TextField
                            disabled={kecamatanTerpilih == null}
                            label={values.kelurahanKerabat === "" ? "Pilih Kelurahan" : ""}
                            InputLabelProps={{ shrink: false }}
                            onChange={handleChange('kelurahanKerabat')}
                            className={classes.text}
                            defaultValue={values.kelurahanKerabat}
                            margin="normal"
                            fullWidth
                            select>
                            {
                                daftarKelurahan.map((kelurahan) =>
                                    <MenuItem
                                        key={kelurahan.id}
                                        value={kelurahan.id}
                                        onClick={handleKelurahan(kelurahan)}
                                    >
                                        {kelurahan.nama}
                                    </MenuItem>)
                            }
                        </TextField>
                        <Grid container spacing={24}>
                            <Grid item xs={4}>
                                <TextField
                                    disabled={kelurahanTerpilih == null}
                                    placeholder="RT"
                                    onChange={handleChange('RtKerabat')}
                                    style={{ paddingRight: "20px", width: "120px" }}
                                    defaultValue={values.RtKerabat}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    disabled={kelurahanTerpilih == null}
                                    placeholder="RW"
                                    onChange={handleChange('RwKerabat')}
                                    style={{ paddingRight: "20px", width: "120px" }}
                                    defaultValue={values.RwKerabat}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    disabled={kelurahanTerpilih == null}
                                    placeholder="Kode Pos"
                                    onChange={handleChange('kodePosKerabat')}
                                    style={{ paddingRight: "20px", width: "170px" }}
                                    defaultValue={values.kodePosKerabat}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                    </FormControl>
                    <br />
                    <br />
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>No. Telp Rumah</FormLabel>
                        <TextField
                            placeholder="xxx-xxxx-xxxx"
                            className={classes.text}
                            onChange={handleChange('telpRumah')}
                            defaultValue={values.telpRumah}
                            margin="normal"
                            fullWidth
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+62 |</InputAdornment>,
                            }}
                        />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>No. HP</FormLabel>
                        <TextField
                            placeholder="xxx-xxxx-xxxx"
                            className={classes.text}
                            onChange={handleChange('noHpKerabat')}
                            defaultValue={values.noHpKerabat}
                            margin="normal"
                            fullWidth
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+62 |</InputAdornment>,
                            }}
                        />
                    </FormControl>
                    <br />
                    <br />

                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Hubungan Dengan Nasabah</FormLabel>
                        <TextField
                            label={values.hubunganDenganNasabah === "" ? "Pilih Hubungan Dengan Nasabah" : ""}
                            className={classes.text}
                            InputLabelProps={{ shrink: false }}
                            onChange={handleKerabat('hubunganDenganNasabah')}
                            defaultValue={values.hubunganDenganNasabah}
                            margin="normal"
                            fullWidth
                            select>
                            <MenuItem value="OrangTua">Orang Tua</MenuItem>
                            <MenuItem value="SaudaraKandung">Suadara Kandung</MenuItem>
                            <MenuItem value="anak">Anak Kandung</MenuItem>
                            <MenuItem value="hubunganLainnya">Lainnya</MenuItem>
                        </TextField>
                        {
                            isKerabat ?
                                <TextField
                                    placeholder="Lainnya"
                                    margin="normal"
                                    className={classes.text}
                                    onChange={handleChange("kerabatLainnya")}
                                    //tambah state baru statusLainnya
                                    defaultValue={values.kerabatLainnya}
                                />
                                : null
                        }
                    </FormControl>
                    <br />
                    <br />
                    <div className="footer">
                        <Button
                            className="button1"
                            variant="contained"
                            onClick={this.back}
                        >Periksa Kembali</Button>

                        <Button
                            className="button2"
                            variant="contained"
                            onClick={this.continue}
                        >Lanjut</Button>
                    </div>

                </div>
            </div >
        );
    }
}

export default withStyles(styles)(FormDataKerabat);
