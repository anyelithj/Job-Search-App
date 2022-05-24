import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import React, { useState, useContext, useEffect  } from "react";
import SectionList from "./SectionList";
import { Autocomplete, TextField } from '@mui/material'
import { apiTokenJobs } from '../../helpers/url'
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'



const Controls = () => {

  const context = useContext(authContext);
  const [lenguaje, setLenguaje] = useState("");
  const [pais, setPais] = useState("");
  const [salario, setSalario] = useState("");
  
  useEffect(()=>{
    apiTokenJobs("/api/jobs")
    .then(data=>{
        console.log(data)
    })
  })
 
  return (
    <div>
      <h2>Categorias</h2>
      <SectionList
        title="lenguaje"
        url=""
        handleChange={(e) => {
          setLenguaje(e.target.value);
        }}
      />
      {lenguaje && (
        <SectionList
        title="pais"
        url=""
        handleChange={(e) => {
          setPais(e.target.value);
        }}
      />
      )}
      {pais && (
         <SectionList
         title="salario"
         url=""
         handleChange={(e) => {
           setSalario(e.target.value);
         }}
       />
      )}
     
      <pre>
        <code>
          {lenguaje}-{pais}-{salario}
        </code>
      </pre>
    </div>
  );
};

export default Controls;
