import React, { useContext, useRef, useState } from 'react'
import "../../styles/components/Login.scss";
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../context/AuthContext'
import { post } from '../../helpers/url'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const RegisterEmployer = () => {

  const context = useContext(authContext)
  const navigate = useNavigate()
  const [error,setError] = useState({
    isError:false,
    message:"",
    loading:false
  })

  const [rol, setrol] = useState('');

  const email = useRef()
  const password = useRef()
  const name = useRef()

 const handleChange = (event) => {
  setrol(event.target.value);
};

  const signup = (event) =>{
    event.preventDefault()

    console.log(rol)

    console.log(name.current.value)
    console.log(email.current.value)
    console.log(password.current.value)

    setError({...error,loading:true})
    post("/api/auth/signup",{
      name:name.current.value,
      email: email.current.value,
      password:password.current.value,
      role:rol
    })
    .then(({data})=>{
      setError({...error,loading:false})
      localStorage.setItem("token",data.token)
      context.setAuth({
        id:data.user.id,
        name:data.user.name,
        logged:true
      })
      navigate("/login",{
        replace:true
    })
    })
    .catch(error=>{
      console.log(error.response.data)
      setError({
        isError:true,
        message:error.response.data.message,
        loading:false
      })
    })
}


  return (
    <div className='bodyLogin'>
    <div className = "form">
        <div className = "formContainer">
            <form onSubmit={signup}>
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
              /></div>

            <div>
              <TextField
              inputRef={name} 
              required
              label="name"
              type="text" 
              placeholder='Nombre...'
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
              <div>


             <InputLabel id="demo-simple-select-filled-label">Rol</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={'Rol'}
          onChange={handleChange}
          label="Rol"
          sx={{ background: 'white' }}
        >
          <MenuItem value={'applicant'}>Postulante</MenuItem>
          <MenuItem value={'employer'}>Empleador</MenuItem>
        </Select>
             </div>

             <div>
            <Button color="primary" type="submit" variant="contained">Registrarse</Button>
            </div>
            </form>
            {error.loading&&<p>Cargando.... Espere...</p>}
            {error.isError&&<p>{error.message}</p>}
        </div>
    </div>
</div>
  )
}

export default RegisterEmployer
