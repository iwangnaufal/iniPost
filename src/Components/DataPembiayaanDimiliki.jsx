import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid, FormControlLabel, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { DatePicker } from "@material-ui/pickers";
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";

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
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Memiliki Pembiayaan di Bank/Lembaga Keuangan lain</FormLabel>
            <TextField
              label={values.pembiayaanLain === "" ? "Pilih" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleKeuangan('pembiayaanLain')}
              className={classes.text}
              defaultValue={values.pembiayaanLain}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="jikaYa" >Ya</MenuItem>
              <MenuItem value={10}>Tidak</MenuItem>
            </TextField>
            {
              isYa ?
                <>
                  <FormControl >
                    <FormLabel className={classes.label}>Pembiayaan dengan Outstanding terbesar</FormLabel>
                    <TextField
                      placeholder="Masukan Jumlah Pembiayaan"
                      className={classes.text}
                      onChange={handleChange('jumlahPembiayaan')}
                      defaultValue={values.jumlahPembiayaan}
                      margin="normal"
                      fullWidth
                      className={clsx(classes.margin, classes.textField)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rp. |</InputAdornment>,
                      }}
                    />
                  </FormControl>
                  <FormControl >
                    <TextField
                      placeholder="Masukan Jumlah Angsuran"
                      className={classes.text}
                      onChange={handleChange('jumlahAngsuran')}
                      defaultValue={values.jumlahAngsuran}
                      margin="normal"
                      fullWidth
                      className={clsx(classes.margin, classes.textField)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rp. |</InputAdornment>,
                      }}
                    />
                  </FormControl>
                  <TextField
                    placeholder="Masukan Jenis Pembiayaan"
                    className={classes.text}
                    onChange={handleChange('jenisPembiayaan')}
                    defaultValue={values.jenisPembiayaan}
                    margin="normal"
                    fullWidth
                  />
                  <TextField
                    placeholder="Masukan Nama Kreditur"
                    className={classes.text}
                    onChange={handleChange('namaKreditur')}
                    defaultValue={values.namaKreditur}
                    margin="normal"
                    fullWidth
                  />

                </>
                : null
            }
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jatuh Tempo</FormLabel>
            <TextField
               type="date"
               format="YYYY-MM-DD"
               id="start_date"
               name="start_date"
               placeholder="Start Date"
               value={this.state.start_date}
               onChange={this.onChangeHandle}
               className={classes.text}
               onChange={handleChange('tanggalTempo')}
               defaultValue={values.tanggalTempo}
               margin="normal"
               fullWidth
            />
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>
    );
  }
}

export default withStyles(styles)(DataPembiayaanDimiliki);
