import React, { useEffect, useState } from "react";
import axios from 'axios';
import { apiTokenJobs } from '../../helpers/url'
import SearchIcon from '@mui/icons-material/Search';
import Card from "./Card";
import '../../styles/components/Search.scss'

const Search = () => {
  const [empleos, setEmpleos] = useState([]);
  // const [tabla, setTable] = useState([]);
  const [busqueda, setBusqueda] = useState("");


  useEffect(() => {
    apiTokenJobs("/api/jobs").then((data) => {
      setEmpleos([data]);
      // console.log(data)
    }).catch((error)=> {
      // console.log(error)
    });
  }, []);


  const handleChange = e => {
    setBusqueda(e.target.value)
    // console.log("Busqueda: " + e.target.value);
  }

  const consulta = (busq)=>{
    let resultBusqueda = empleos.filter((empleo, i)=>{
      if(empleo.data[i].title.toString().toLowerCase().includes(busq.toLowerCase())
      || (empleo.data[i].location.country.toString().toLowerCase().includes(busq.toLowerCase()))
      ){
        return empleo;
      }
    });
    setBusqueda(resultBusqueda)
  }

  // console.log(empleos)
  return (
    <>
    <div className="container__search">
      <input
        type="text"
        className="input__search"
        placeholder="Woodland Hills"
        value={busqueda}
        onChange={handleChange}
        />
        <button className="button__search">
          <SearchIcon/>
        </button>
    </div>
    <Card/>
    </>
  );
};

export default Search;
