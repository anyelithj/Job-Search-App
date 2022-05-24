import { Autocomplete, TextField } from '@mui/material'
import React, {useContext, useEffect } from 'react'
import { apiTokenJobs } from '../../helpers/url'
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Controls = () => {
  const context = useContext(authContext)

  apiTokenJobs("/api/jobs")
.then(data=>{
    console.log(data)
})




  return (
    <div>

    </div>
  )
}

export default Controls
