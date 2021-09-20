import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import axios from 'axios';


export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { NIK, fullName, email, province, city, district }
    } = this.props;
    axios({
      url : "http://localhost:9000/user/api/create",
      method : 'post',
      headers : {

      },
      data : {
        NIK : NIK,
        fullName : fullName,
        email : email,
        province : province,
        city :city,
        district : district
      }
    })
    .then((response) => console.log(response))
    .catch((err)=>console.log(err))
    return (
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Data Berikut telah berhasil Disimpan" />
            <List>
              <ListItem>
                <ListItemText primary="NIK" secondary={NIK} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nama Lengkap" secondary={fullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Provinsi" secondary={province} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Kota" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Kelurahan" secondary={district} />
              </ListItem>
            </List>
            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Keluar</Button>
          </Dialog>
        </>
    );
  }
}

export default Confirm;
