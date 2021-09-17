import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid, FormControlLabel, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { DatePicker } from "@material-ui/pickers";
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

export class FormDataPemohon extends Component {
  state = { checkedA: false, isLainnya: false,
    // daftarKabupatenKota: [],
    // daftarKecamatan: [], daftarKelurahan: [],
    // provinsiTerpilih: null, kabupatenKotaTerpilih: null,
    // kecamatanTerpilih: null, kelurahanTerpilih: null,
  }

  handleSwitch = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked })
    this.props.handleAlamatSama();
  }

  handleLainnya = (event) => {
    if (event.target.value === "Lainnya") {
      this.setState({isLainnya: true})
      this.props.handleChange("statusTempatTinggal")
    } else {
      this.setState({isLainnya: false})
      this.props.handleChange("statusTempatTinggal")
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

  // onProvinsiMenuItemClick = provinsi => e => {
  //   this.props.getDaftarKabupatenKota(provinsi.id)
  //   this.setState({ provinsiTerpilih: e.target.value })
  // }

  // onKabupatenKotaMenuItemClick = kota_kabupaten => e => {
  //   this.props.getDaftarKecamatan(kota_kabupaten.id)
  //   this.setState({ kabupatenKotaTerpilih: e.target.value })
  // }

  // onKecamatanMenuItemClick = kecamatan => e => {
  //   this.props.getDaftarKelurahan(kecamatan.id)
  //   this.setState({ kecamatanTerpilih: e.target.value })
  // }

  // onKelurahanMenuItemClick = kelurahan => e => {
  //   this.setState({ kelurahanTerpilih: kelurahan })
  // }


  render() {
    const { values, handleChange, handleLainnya, classes,
      daftarProvinsi, daftarKabupatenKota,
      daftarKecamatan, daftarKelurahan,
      handleProvinsi, handleKabupatenKota,
      handleKecamatan, handleKelurahan,
      provinsiTerpilih, kabupatenKotaTerpilih,
      kecamatanTerpilih, kelurahanTerpilih, isLainnya } = this.props;

    return (
      <div className="mainPage">
        <div className="mainForm">
          <p className="judul">Data Pemohon</p>
          <br />
          <br />
          <AppBar title="Masukkan Data Pengguna" />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nama Lengkap Tanpa Singkatan dan Tanpa Gelar</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Nama Lengkap Tanpa Singkatan dan Tanpa Gelar"
              onChange={handleChange('namaLengkap')}
              defaultValue={values.namaLengkap}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Tempat / Tanggal Lahir </FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Tempat"
              onChange={handleChange('tempatLahir')}
              defaultValue={values.tempatLahir}
              margin="normal"
            />
            <TextField
              className={classes.text}
              placeholder="Tanggal"
              onChange={handleChange('tanggalLahir')}
              defaultValue={values.tanggalLahir}
              margin="normal"
              fullWidth
            />
            {/* <DatePicker
              variant="inline"
              openTo="year"
              views={["year", "month"]}
              label="Year and Month"
              helperText="Start from year selection"
              value={selectedDate}
              onChange={handleDateChange}
            /> */}
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nomor KTP</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan 16 Digit Nomor KTP"
              onChange={handleChange('noKTP')}
              defaultValue={values.noKTP}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nomor NPWP</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Nomor NPWP"
              onChange={handleChange('noNPWP')}
              defaultValue={values.noNPWP}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nama Gadis Ibu Kandung</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Nama Gadis Ibu Kandung"
              onChange={handleChange('namaGadisIbuKandung')}
              defaultValue={values.namaGadisIbuKandung}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Status Perkawinan</FormLabel>
            <TextField
              label={values.statusPerkawinan === "" ? "Pilih Status Perkawinan" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('statusPerkawinan')}
              defaultValue={values.statusPerkawinan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Menikah">Menikah</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Pendidikan Terakhir</FormLabel>
            <TextField
              label={values.pendidikanTerakhir === "" ? "Pilih Pendidikan Terakhir" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('pendidikanTerakhir')}
              defaultValue={values.pendidikanTerakhir}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="SD">SD</MenuItem>
              <MenuItem value="SMP">SMP</MenuItem>
              <MenuItem value="SMA">SMA</MenuItem>
              <MenuItem value="S1">S1</MenuItem>
              <MenuItem value="S2">S2</MenuItem>
              <MenuItem value="S3">S3</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Status Tempat Tinggal</FormLabel>
            <TextField
              label={values.statusTempatTinggal === "" ? "Pilih Status Tempat Tinggal" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handleLainnya("statusTempatTinggal")}
              value={values.statusTempatTinggal}
              // onChange={event => {handleChange("statusTempatTinggal"); this.handleLainnya(event)}}
              defaultValue={values.statusTempatTinggal}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Milik Sendiri">Milik Sendiri</MenuItem>
              <MenuItem value="Keluarga">Keluarga</MenuItem>
              <MenuItem value="Kontrak/Kosan">Kontrak/Kosan</MenuItem>
              <MenuItem value="Lainnya">Lainnya</MenuItem>
            </TextField>
            {
              isLainnya ?
              <TextField
                placeholder="Masukkan Status Tempat Tinggal"
                margin="normal"
                className={classes.text}
                onChange={handleChange("statusLainnya")}
                //tambah state baru statusLainnya
                defaultValue={values.statusLainnya}
              />
              : null
            }
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat sesuai KTP</FormLabel>
            <TextField
              label={values.provinsiKTP === "" ? "Pilih Provinsi" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('provinsiKTP')}
              defaultValue={values.provinsiKTP}
              margin="normal"
              fullWidth
              select>
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
              label={values.kotaKabupatenKTP === "" ? "Pilih Kabupaten / Kota" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kotaKabupatenKTP')}
              defaultValue={values.kotaKabupatenKTP}
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
              label={values.kecamatanKTP === "" ? "Pilih Kecamatan" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kecamatanKTP')}
              defaultValue={values.kecamatanKTP}
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
              label={values.kelurahanKTP === "" ? "Pilih Kelurahan" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kelurahanKTP')}
              defaultValue={values.kelurahanKTP}
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
            <TextField
              className={classes.text}
              placeholder="Masukkan Detail Alamat (Nama Jalan, No. Rumah, Blok, RT/RW"
              onChange={handleChange('alamatKTP')}
              defaultValue={values.alamatKTP}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Tempat Tinggal Saat Ini</FormLabel>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item className="switchLabel">Sama dengan KTP</Grid>
                <Grid item>
                  <PurpleSwitch checked={this.state.checkedA} onChange={this.handleSwitch} name="checkedA" />
                </Grid>
              </Grid>
            </Typography>
            {/* {
              this.state.checkedA ?

            } */}
            <TextField
              disabled={this.state.checkedA}
              label={values.provinsiSaatIni === "" ? "Pilih Provinsi" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('provinsiSaatIni')}
              value={this.state.checkedA ? values.provinsiKTP : values.provinsiSaatIni}
              // defaultValue={values.provinsiSaatIni}
              defaultValue={this.state.checkedA ? values.provinsiKTP : values.provinsiSaatIni}
              margin="normal"
              fullWidth
              select>
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
              disabled={provinsiTerpilih == null || this.state.checkedA}
              label={values.kotaKabupatenSaatIni === "" ? "Pilih Kabupaten / Kota" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kotaKabupatenSaatIni')}
              value={this.state.checkedA ? values.kotaKabupatenKTP : values.kotaKabupatenSaatIni}
              defaultValue={this.state.checkedA ? values.kotaKabupatenKTP : values.kotaKabupatenSaatIni}
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
              disabled={kabupatenKotaTerpilih == null || this.state.checkedA}
              label={values.kecamatanSaatIni === "" ? "Pilih Kecamatan" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kecamatanSaatIni')}
              value={this.state.checkedA ? values.kecamatanKTP : values.kecamatanSaatIni}
              defaultValue={this.state.checkedA ? values.kecamatanKTP : values.kecamatanSaatIni}
              // defaultValue={values.kecamatanSaatIni}
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
              disabled={kecamatanTerpilih == null || this.state.checkedA}
              label={values.kelurahanSaatIni === "" ? "Pilih Kelurahan" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kelurahanSaatIni')}
              value={this.state.checkedA ? values.kelurahanKTP : values.kelurahanSaatIni}
              defaultValue={this.state.checkedA ? values.kelurahanKTP : values.kelurahanSaatIni}
              // defaultValue={values.kelurahanSaatIni}
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
            <TextField
              disabled={this.state.checkedA}
              className={classes.text}
              placeholder="Masukkan Detail Alamat (Nama Jalan, No. Rumah, Blok, RT/RW"
              onChange={handleChange('alamatSaatIni')}
              value={this.state.checkedA ? values.alamatKTP : values.alamatSaatIni}
              defaultValue={this.state.checkedA ? values.alamatKTP : values.alamatSaatIni}
              // defaultValue={values.alamatSaatIni}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Surat Menyurat</FormLabel>
            <TextField
              label={values.alamatSuratMenyurat === "" ? "Pilih Alamat Surat Menyurat" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('alamatSuratMenyurat')}
              defaultValue={values.alamatSuratMenyurat}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Alamat KTP">Alamat KTP</MenuItem>
              <MenuItem value="Alamat Saat Ini">Alamat Saat Ini</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Telepon Rumah</FormLabel>
            <TextField
              className={classes.text}
              placeholder="+62 | xxx-xxxx-xxxx"
              onChange={handleChange('noTeleponRumah')}
              defaultValue={values.noTeleponRumah}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Email</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Alamat Email Aktif"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Handphone</FormLabel>
            <TextField
              className={classes.text}
              placeholder="+62 | xxx-xxxx-xxxx"
              onChange={handleChange('noHP')}
              defaultValue={values.noHP}
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
      </div>
    );
  }
}

export default withStyles(styles)(FormDataPemohon);
