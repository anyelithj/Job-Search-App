import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import React, { useState, useContext, useEffect  } from "react";
import SectionList from "./SectionList";
import { Autocomplete, TextField } from '@mui/material'
import { apiTokenJobs } from '../../helpers/url'
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'



const Controls = () => {

  const context = useContext(authContext);
  // const [state, setState] = useState("");
  // const [twon, setTown] = useState("");
  // const [suburb, setSuburb] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [pais, setPais] = useState("");
  const [salario, setSalario] = useState("");
  
// const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

  // useEffect(()=>{
  //   apiTokenJobs("/api/jobs")
  //   .then(data=>{
  //       console.log(data)
  //   })
  // })
 
  return (
    <div>
    <h2>Categorias</h2>
    <SectionList
      title="category"
      url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
      handleChange={(e) => {
        setLenguaje(e.target.value);
      }}
    />
    {lenguaje && (
      <SectionList
      title="location"
      url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
      handleChange={(e) => {
        setPais(e.target.value);
      }}
    />
    )}
    {pais && (
       <SectionList
       title="salary"
       url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
       handleChange={(e) => {
         salario(e.target.value);
       }}
     />
    )}
   
    <span>{lenguaje} - {pais} - {salario}</span>
  </div>

    // <div>
    //   <h2>Categorias</h2>
    //   <SectionList
    //     title="category"
    //     url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
    //     handleChange={(e) => {
    //       setState(e.target.value);
    //     }}
    //   />
    //   {state && (
    //     <SectionList
    //     title="location"
    //     url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
    //     handleChange={(e) => {
    //       setTown(e.target.value);
    //     }}
    //   />
    //   )}
    //   {town && (
    //      <SectionList
    //      title="salary"
    //      url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
    //      handleChange={(e) => {
    //        setSuburb(e.target.value);
    //      }}
    //    />
    //   )}
     
    //   <pre>
    //     <code>
    //       {state}-{town}-{suburb}
    //     </code>
    //   </pre>
    // </div>
  );
};

export default Controls;
