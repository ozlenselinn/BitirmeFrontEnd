
import React from 'react'
import { Grid,Paper, TextField, Button } from '@material-ui/core'
import './LoginStyle.css';

const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:480, margin:"20px auto"}
  
    const btnstyle={margin:'8px 0'}
    return(
      <div className = "loginPage">
        <Grid>
          <div className = "loginCard">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                   <img src= 'https://cdn4.vectorstock.com/i/thumb-large/58/18/monitoring-surveillance-vector-20695818.jpg' alt ="logo" />
                    <h2>LOSTSECURE</h2>
                </Grid>
                <div className='textFieldStyle'>
                  <div className='textFieldPer'>
                <TextField label='Kullanıcı Adı' placeholder='Kullanıcı Adı Giriniz' fullWidth required/>
                </div>
                <TextField label='Şifre' placeholder='Şifre Giriniz' type='password' fullWidth required/>
                </div>
              <div className='buttonStyle'>
                <Button type='submit'  style={{color:'black', fontSize:'100%'}} fullWidth>Giriş</Button>
                </div>
            </Paper>
            </div>
        </Grid>
        </div>
    )
}

export default Login;