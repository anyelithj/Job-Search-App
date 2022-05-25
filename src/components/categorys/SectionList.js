import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { apiTokenJobs } from '../../helpers/url'
import { OptionUnstyled } from '@mui/base';
import { bgcolor } from '@mui/system';

const SectionList = () => {

  const [data, setData] = useState([])
  
  useEffect(() => {
    apiTokenJobs("/api/jobs").then((data) => {
      setData([data]);
      // console.log(data)
    }).catch((error)=> {
      // console.log(error)
    });
  }, []);

  
  const handleChange = (e) =>{
    const opcion = e.target.value;
    // console.log(opcion);
    setData(opcion)
}
  //  console.log(data.data)
  const info = [data.data];
  console.log(info)
  //  console.log(Array.isArray(data.data))
  return (
    <>
       {/* <label htmlFor={id}>{label}</label> */}
       {/* {loading && <Loader/>} */}
       {/* <select name={data.data._id} id={data.data_id} onChange={handleChange}>
       <option value="">Elige un option</option>
       {
            data.data.map((item, i)=>(
                 <option key={i} value={i}>{item.title}</option>
            ))
        } */}
         {/* <option value="">Elige un {data.data.title}</option> */}
         {/* {data && options.map((elem)=> <option value={el}>{el}</option>)} */}
       {/* </select> */}
    </>
  )
}

export default SectionList
