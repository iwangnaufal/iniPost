import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Dialog, AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid, Select } from '@material-ui/core';
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import axios from 'axios';

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
    width: "641px",
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
    const { values, handleChange, classes,
      daftarProvinsi, daftarKabupatenKota,
      daftarKecamatan, daftarKelurahan,
      handleProvinsi, handleKabupatenKota,
      handleKecamatan, handleKelurahan,
      provinsiTerpilih, kabupatenKotaTerpilih,
      kecamatanTerpilih, kelurahanTerpilih } = this.props;

    return (
      <div className="mainPage">
        <div className="mainForm">
          <p className="judul">Data Agunan</p>
          <br />
          <br />
          <AppBar title="Masukkan Data Pengguna" />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jenis Agunan</FormLabel>
            <TextField
              className={classes.text}
              label={values.jenisAgunan === "" ? "Pilih Jenis Agunan" : ""}
              onChange={handleChange('jenisAgunan')}
              defaultValue={values.jenisAgunan}
              margin="normal"
              InputLabelProps={{ shrink: false }}
              select>
              <MenuItem value="Rumah">Rumah</MenuItem>
              <MenuItem value="Ruko / Rukan">Ruko / Rukan</MenuItem>
              <MenuItem value="Apartemen / Rusun">Apartemen / Rusun</MenuItem>
              <MenuItem value="Kavling">Kavling</MenuItem>
            </TextField>
            <TextField
              placeholder="Masukkan Luas Tanah (dalam meter persegi)"
              className={classes.text}
              onChange={handleChange('luasTanah')}
              defaultValue={values.luasTanah}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Masukkan Luas Bangunan (dalam meter persegi)"
              onChange={handleChange('luasBangunan')}
              className={classes.text}
              defaultValue={values.luasBangunan}
              margin="normal"
              fullWidth
            />
            <TextField
              label={values.statusKepemilikan === "" ? "Pilih Status Kepemilikan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('statusKepemilikan')}
              className={classes.text}
              defaultValue={values.statusKepemilikan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="SHM">SHM</MenuItem>
              <MenuItem value="SHGB">SHGB</MenuItem>
              <MenuItem value="Strata Title / SHMRS">Strata Title / SHMRS</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Kondisi Bangunan</FormLabel>
            <TextField
              label={values.kondisiBangunan === "" ? "Pilih Kondisi Bangunan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('kondisiBangunan')}
              className={classes.text}
              defaultValue={values.kondisiBangunan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Siap Huni">Siap Huni</MenuItem>
              <MenuItem value="Dalam Proses Pembuatan">Dalam Proses Pembuatan</MenuItem>
            </TextField>
            <TextField
              label={values.statusAgunan === "" ? "Pilih Status Agunan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('statusAgunan')}
              className={classes.text}
              defaultValue={values.statusAgunan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Ditinggali">Ditinggali</MenuItem>
              <MenuItem value="Disewakan">Disewakan</MenuItem>
              <MenuItem value="Kosong">Kosong</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Atas Nama Sertifikat (Eksisting / Balik Nama)</FormLabel>
            <TextField
              placeholder="Masukkan Atas Nama Sertifikat (Eksisting / Balik Nama)"
              className={classes.text}
              onChange={handleChange('atasNamaSertifikat')}
              defaultValue={values.atasNamaSertifikat}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Sertifikat</FormLabel>
            <TextField
              placeholder="Masukkan Nomor Sertifikat"
              className={classes.text}
              onChange={handleChange('nomorSertifikat')}
              defaultValue={values.nomorSertifikat}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. SPR* Developer</FormLabel>
            <TextField
              placeholder="Masukkan No. SPR Developer"
              className={classes.text}
              onChange={handleChange('nomorSPRDeveloper')}
              defaultValue={values.nomorSPRDeveloper}
              margin="normal"
              fullWidth
              helperText="*) Surat Pemesanan Rumah"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Agunan</FormLabel>
            <TextField
              placeholder="Masukkan Alamat Properti"
              onChange={handleChange('alamatPropertiAgunan')}
              className={classes.text}
              defaultValue={values.alamatPropertiAgunan}
              margin="normal"
              fullWidth
            />
            <TextField
              label={values.provinsiAgunan === "" ? "Pilih Provinsi" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('provinsiAgunan')}
              className={classes.text}
              defaultValue={values.provinsiAgunan}
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
              label={values.kabupatenKotaAgunan === "" ? "Pilih Kabupaten / Kota" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('kabupatenKotaAgunan')}
              className={classes.text}
              defaultValue={values.kabupatenKotaAgunan}
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
              label={values.kecamatanAgunan === "" ? "Pilih Kecamatan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('kecamatanAgunan')}
              className={classes.text}
              defaultValue={values.kecamatanAgunan}
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
              label={values.kelurahanAgunan === "" ? "Pilih Kelurahan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('kelurahanAgunan')}
              className={classes.text}
              defaultValue={values.kelurahanAgunan}
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
                  placeholder="RT/RW"
                  onChange={handleChange('rtRwAgunan')}
                  style={{ paddingRight: "20px", width: "170px" }}
                  defaultValue={values.rtRwAgunan}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  disabled={kelurahanTerpilih == null}
                  placeholder="Kode Pos"
                  onChange={handleChange('kodePosAgunan')}
                  style={{ paddingRight: "20px", width: "170px" }}
                  defaultValue={values.kodePosAgunan}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </FormControl>
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

export default withStyles(styles)(FormDataAgunan);
