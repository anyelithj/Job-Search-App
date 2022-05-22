import React, { useContext, useRef } from 'react'
import "../../styles/components/Login.scss";
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../context/AuthContext'
import { post } from '../../helpers/url'

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
                <input ref={email} placeholder='Email...' type="email" />
                <input ref={password} placeholder='Password...' type="password" />

                <button>Login</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default LoginEmployeer
