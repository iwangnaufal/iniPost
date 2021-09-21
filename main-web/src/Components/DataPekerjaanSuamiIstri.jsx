import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid, FormControlLabel, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { DatePicker } from "@material-ui/pickers";
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
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

export class FormDataPemohon extends Component {
  state = { checkedA: false, isPekerjaanLainnya: false, isKategoriPekerjaan:false }

  handleSwitch = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked })
    this.props.handleAlamatSama();
  }

  handlePekerjaanLain = (event) => {
    if (event.target.value === "lainnyaPekerjaan") {
      this.setState({ isPekerjaanLainnya: true })
      this.props.handleChange("jenisPekerjaanSuamiIstri")
    } else {
      this.setState({ isPekerjaanLainnya: false })
      this.props.handleChange("jenisPekerjaanSuamiIstri")
    }
  }

  handlekategoriInstansiPekerjaanSuami = (event) => {
    if (event.target.value === "lainnyaKategori") {
      this.setState({ isKategoriPekerjaan: true })
      this.props.handleChange("kategoriInstansiPekerjaanSuami")
    } else {
      this.setState({ isKategoriPekerjaan: false })
      this.props.handleChange("kategoriInstansiPekerjaanSuami")
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
    const { values, handleChange, handlePekerjaanLain,handlekategoriInstansiPekerjaanSuami, classes, isPekerjaanLainnya, isKategoriPekerjaan } = this.props;

    return (
      <div className="mainPage">
        <div className="mainForm">
          <p className="judul">Data Pekerjaan Suami/Istri</p>
          <br />
          <br />
          <AppBar title="Masukkan Data Pengguna" />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Lama Bekerja</FormLabel>
            <Grid container spacing={24}>
              <Grid item xs={4}>
                <TextField
                  placeholder="Tahun"
                  onChange={handleChange('tahunLamaBekerja')}
                  style={{ paddingRight: "20px", width: "170px" }}
                  defaultValue={values.tahunLamaBekerja}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  placeholder="Bulan"
                  onChange={handleChange('bulanLamaBekerja')}
                  style={{ paddingRight: "20px", width: "170px" }}
                  defaultValue={values.bulanLamaBekerja}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  placeholder="Jumlah Karyawan"
                  onChange={handleChange('jumlahKaryawanPekerjaanSuami')}
                  style={{ paddingRight: "20px", width: "170px" }}
                  defaultValue={values.jumlahKaryawanPekerjaanSuami}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jenis Pekerjaan</FormLabel>
            <TextField
              label={values.jenisPekerjaanSuamiIstri === "" ? "Pilih Jenis Pekerjaan" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handlePekerjaanLain('jenisPekerjaanSuamiIstri')}
              defaultValue={values.jenisPekerjaanSuamiIstri}
              margin="normal"
              fullWidth
              select>
              <MenuItem value={10}>Karyawan</MenuItem>
              <MenuItem value={20}>Profesional</MenuItem>
              <MenuItem value={30}>Wiraswasta</MenuItem>
              <MenuItem value={40}>Pegawai Negeri(PNS)</MenuItem>
              <MenuItem value={50}>Pegawai Swasta</MenuItem>
              <MenuItem value="lainnyaPekerjaan">Lainnya</MenuItem>
            </TextField>
            {
              isPekerjaanLainnya ?
                <TextField
                  placeholder="Lainnya"
                  margin="normal"
                  className={classes.text}
                  onChange={handleChange("pekerjaanLainnya")}
                  //tambah state baru statusLainnya
                  defaultValue={values.pekerjaanLainnya}
                />
                : null
            }
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nama Perusahaan</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Nama Perusahaan "
              onChange={handleChange('namaPerusahaanSuamiIstri')}
              defaultValue={values.namaPerusahaanSuamiIstri}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jabatan</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Jabatan "
              onChange={handleChange('jabatanSuamiIstri')}
              defaultValue={values.jabatanSuamiIstri}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Kategori Instansi</FormLabel>
            <TextField
              label={values.kategoriInstansiPekerjaanSuami === "" ? "Pilih Kategori Instansi" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handlekategoriInstansiPekerjaanSuami('kategoriInstansiPekerjaanSuami')}
              defaultValue={values.kategoriInstansiPekerjaanSuami}
              margin="normal"
              fullWidth
              select>
              <MenuItem value={10}>Pemerintah</MenuItem>
              <MenuItem value={20}>BUMN</MenuItem>
              <MenuItem value={30}>TNI/Polri</MenuItem>
              <MenuItem value={40}>Wiraswasta/Profesional</MenuItem>
              <MenuItem value={50}>Swasta Asing</MenuItem>
              <MenuItem value={60}>Swasta Nasional</MenuItem>
              <MenuItem value="lainnyaKategori">Lainnya</MenuItem>
            </TextField>
            {
              isKategoriPekerjaan ?
                <TextField
                  placeholder="Lainnya"
                  margin="normal"
                  className={classes.text}
                  onChange={handleChange("lainKategoriPekerjaan")}
                  defaultValue={values.lainKategoriPekerjaan}
                />
                : null
            }
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Pendapatan Per Bulan</FormLabel>
            <TextField
              className={classes.text}
              placeholder="0"
              onChange={handleChange('pendapatanPerbulan')}
              defaultValue={values.pendapatanPerbulan}
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">Rp. |</InputAdornment>,
              }}
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
      </div>
    );
  }
}

export default withStyles(styles)(FormDataPemohon);
