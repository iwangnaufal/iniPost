import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios'
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
//import qs from 'qs'

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  componentDidMount(props){
    console.log(this.props.NIK)
    // axios({
    //   url : "http://localhost:9000/user/api/create",
    //   method : 'post',
    //   headers : {

    //   },
    //   data : {
    //     NIK : this.props.NIK,
    //     fullName : this.props.fullName,
    //     email : this.props.email,
    //     province : this.props.province,
    //     city :this.props.city,
    //     district : this.props.district
    //   }
    // })
    // .then((response) => console.log(response))
    // .catch((err)=>console.log(err))
    
    //   axios("http://localhost:9000/user/api/getall",{
    //   method : 'GET'
    // }).then((response) => console.log("Berhasil"))
    // .catch((err)=>console.log(err))
    // console.log("Diluar Axios")
  }
  render() {

    return (
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Terimakasih</h1>
            <p>Kamu akan mendapatkan informasi selanjutnya nanti.</p>
          </Dialog>
        </>
    );
  }
}

export default Success;
