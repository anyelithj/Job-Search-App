import React, { useContext, useRef } from 'react'
import "../../styles/components/Login.scss";
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../context/AuthContext'
import { post } from '../../helpers/url'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const LoginEmployeer = () => {

  const context = useContext(authContext)
  const navigate = useNavigate()
  const email = useRef()
  const password = useRef()

  const login = (event) =>{
    event.preventDefault()

    post("/api/auth/login",{ // Peticion de login
      email: email.current.value,
      password:password.current.value
  })
  .then(data=>{
      const {token,user} = data.data
      localStorage.setItem("token",token) // Guardamos el token que recibimos
      context.setAuth({
          id:user.id,
          name:user.name,
          logged:true
      })
      navigate("/",{
          replace:true
      })
  })


}



  return (
    <div className='bodyLogin'>
    <div className = "form">
        <div className = "formContainer">
            <form onSubmit={login}>
            <div>
            <TextField
              inputRef={email} 
              required
              label="Email"
              type="email" 
              placeholder='Email...'
              margin="normal"
              sx={{
                input: {
                  background: "white"
                }
              }}
              />
              </div>
              <div>
             <TextField
              inputRef={password} 
              required
              label="Password"
              type="password" 
              placeholder='Password...'
              margin="normal"
              sx={{
                input: {
                  background: "white"
                }
              }}
              />
              </div>
            <Button color="primary" type="submit" variant="contained">Inicio sesión</Button>
            </form>
        </div>
    </div>
</div>
  )
}

export default LoginEmployeer
