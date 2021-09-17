import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Dialog, AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid, InputAdornment } from '@material-ui/core';
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
    fontSize: "12px",
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

export class FormDataAgunan extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, classes } = this.props;

    return (
      <div className="mainPage">
        <div className="mainForm">
          <p className="judul">Data Pekerjaan Pemohon</p>
          <br />
          <br />
          <AppBar title="Masukkan Data Pengguna" />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Lama Bekerja</FormLabel>
            <TextField
              placeholder="Masukan Lama Bekerja dalam Tahun"
              className={classes.text}
              onChange={handleChange('lamaBekerja')}
              defaultValue={values.lamaBekerja}
              margin="normal"
              fullWidth
            />
            <FormLabel className={classes.label}>Jenis Pekerjaan</FormLabel>
            <TextField
              placeholder="Masukan Jenis Pekerjaan"
              onChange={handleChange('luasBangunan')}
              className={classes.text}
              defaultValue={values.jenisPekerjaan}
              margin="normal"
              fullWidth
            />
            <FormLabel className={classes.label}>Status Pekerjaan</FormLabel>
            <TextField
              placeholder="Masukan Status Pekerjaan"
              onChange={handleChange('statusPekerjaan')}
              className={classes.text}
              defaultValue={values.statusPekerjaan}
              margin="normal"
              fullWidth
            />
            <FormLabel className={classes.label}>Status Pekerjaan</FormLabel>
            <TextField
              label={values.statusPekerjaan === "" ? "Pilih Status Pekerjaan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('statusPekerjaan')}
              className={classes.text}
              defaultValue={values.statusPekerjaan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Karyawan Tetap">Karyawan Tetap</MenuItem>
              <MenuItem value="Karyawan Kontrak">Karyawan Kontrak</MenuItem>
            </TextField>
            <FormLabel className={classes.label}>Data Perusahaan</FormLabel>
            <TextField
              placeholder="Masukan Nama Perusahaan"
              onChange={handleChange('namaPerusahaan')}
              className={classes.text}
              defaultValue={values.namaPerusahaan}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Masukan Alamat Perusahaan"
              onChange={handleChange('alamatKantor')}
              className={classes.text}
              defaultValue={values.alamatKantor}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Masukan Kategori Instansi"
              onChange={handleChange('kategoriInstansi')}
              className={classes.text}
              defaultValue={values.kategoriInstansi}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Masukan Bidang Usaha"
              onChange={handleChange('bidangUsaha')}
              className={classes.text}
              defaultValue={values.bidangUsaha}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Masukan Jumlah Karyawan"
              onChange={handleChange('jumlahKaryawan')}
              className={classes.text}
              defaultValue={values.jumlahKaryawan}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Masukan Telepon Kantor"
              onChange={handleChange('teleponKantor')}
              className={classes.text}
              defaultValue={values.teleponKantor}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Masukan Telepon HRD"
              onChange={handleChange('teleponHRD')}
              className={classes.text}
              defaultValue={values.teleponHRD}
              margin="normal"
              fullWidth
            />
            <FormLabel className={classes.label}>Jabatan</FormLabel>
            <TextField
              placeholder="Masukan Jabatan Saat Ini"
              onChange={handleChange('jabatan')}
              className={classes.text}
              defaultValue={values.jabatan}
              margin="normal"
              fullWidth
            />
            <FormLabel className={classes.label}>Pendapatan Per Bulan</FormLabel>
            <TextField
              placeholder="0"
              id="standard-start-adornment"
              onChange={handleChange('pembayaranGaji')}
              className={classes.text}
              InputProps={{
                startAdornment: <InputAdornment position="start">Rp. | </InputAdornment> 
              }}
              defaultValue={values.pembayaranGaji}
              margin="normal"
              fullWidth
            />
            <FormLabel className={classes.label}>Pembayaran Gaji</FormLabel>
            <TextField
              label={values.pembayaranGaji === "" ? "Masukan Cara Pembayaran Gaji" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('pembayaranGaji')}
              className={classes.text}
              defaultValue={values.pembayaranGaji}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Transfer Bank Muamalat">Transfer Bank Muamalat</MenuItem>
              <MenuItem value="Transfer Bank Lain">Transfer Bank Lain</MenuItem>
            </TextField>
            <FormLabel className={classes.label}>Alamat Email HRD</FormLabel>
            <TextField
              placeholder="Masukan Alamat Email HRD"
              onChange={handleChange('emailHRD')}
              className={classes.text}
              defaultValue={values.emailHRD}
              margin="normal"
              fullWidth
            />
            <FormLabel className={classes.label}>Alamat Email Atasan</FormLabel>
            <TextField
              placeholder="Masukan Alamat Email Atasan"
              onChange={handleChange('emailAtasan')}
              className={classes.text}
              defaultValue={values.emailAtasan}
              margin="normal"
              fullWidth
            />
            <FormLabel className={classes.label}>No. Telepon Atasan</FormLabel>
            <TextField
              placeholder="xxx-xxxx-xxxx"
              id="standard-start-adornment"
              onChange={handleChange('teleponAtasan')}
              className={classes.text}
              InputProps={{
                startAdornment: <InputAdornment position="start">+62 | </InputAdornment> 
              }}
              defaultValue={values.teleponAtasan}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <div className="footer">
            <Button
              className="button1"
              variant="contained"
            // onClick={this.back}
            >Kembali</Button>

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

export default withStyles(styles)(FormDataAgunan);
