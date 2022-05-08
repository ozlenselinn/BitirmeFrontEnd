
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Grid,Paper, TextField, Button } from '@material-ui/core'
import UserService from './UserService';
import './LoginStyle.css';



export default function Login() {
  
  var control= false;

  const [id, setId] = useState("");
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let userService = new UserService()
    userService.getAllUsers().then(result => setUsers(result.data.data))
  }, [])

 async function handleSubmit(event)
  {
      event.preventDefault();
  try
      {
       await axios.post("http://localhost:8080/users/register",
      {
     // id: id,
      username: username,
      password: password,
     
      });
        alert("User Registation Successfully");
       // setId("");
        setUsername("");
        setPassword("");
    
      
      }
  catch(err)
      {
        alert("User Registation Failed");
      }
 }


 const handleSubmit2 = (event) => {
  event.preventDefault();

   const data = new FormData(event.currentTarget);

  users.map((user) => {
      // if((user.username == username) && (user.password == password)){
      //     control = true;
      // }

      //console.log(user.username);
  }
  )

  console.log({
    username: data.get('username'),
    password: data.get('password'),
  });
}


 const paperStyle={padding :20,height:'70vh',width:480, margin:"20px auto"}
  
 const btnstyle={margin:'8px 0'}
    
  return(
      <div className = "loginPage">
      <form className="register-form" onSubmit={handleSubmit}>
        <Grid>
          <div className = "loginCard">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                   <img src= 'https://cdn4.vectorstock.com/i/thumb-large/58/18/monitoring-surveillance-vector-20695818.jpg' alt ="logo" />
                    <h2>LOSTSECURE</h2>
                </Grid>
                <div className='textFieldStyle'>
                  <div className='textFieldPer'>
                <TextField name = "username" label='Kullanıcı Adı' placeholder='Kullanıcı Adı Giriniz' fullWidth required onChange={(event) =>
                {
                    setUsername(event.target.value);      
                }}/>
                </div>
                <TextField  name = "password" label='Şifre' placeholder='Şifre Giriniz' type='password' fullWidth required
                    onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}  
                />
                </div>
              <div className='buttonStyle'>
                <Button type='submit'  style={{color:'black', fontSize:'100%'}} fullWidth>Kayıt Ol</Button>
                </div>
               
            </Paper>
            </div>
        </Grid>
        </form>
        <form className="login-form2" onSubmit={handleSubmit2}>

        <div className='buttonStyle'>
                <Button type='submit'  style={{color:'black', fontSize:'100%'}} fullWidth>Giriş Yap</Button>
                </div>
        </form>
        </div>
    );
     
  

}


