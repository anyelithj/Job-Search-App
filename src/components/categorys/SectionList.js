import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { apiTokenJobs } from '../../helpers/url'
import { OptionUnstyled } from '@mui/base';
import { bgcolor } from '@mui/system';

const SectionList = () => {//{title, url, handleChange}

  const [data, setData] = useState([])
  
  useEffect(() => {
    apiTokenJobs("/api/jobs").then((data) => {
      setData([data]);
      // console.log(data)
    }).catch((error)=> {
      // console.log(error)
    });
  }, []);
  /*const {data, error, loading} = useFetch(url);
  console.log(data, error, loading);*/
  //if(!data) return null;//para que no renderice innecesariamente, si no hay data
  
  // if(error) {
  //   return(<Message msg={`Error ${error.status}: ${error.statusText}`} bgcolor="#dc3545"/>)
  // }
  //si no hay error ejecuta este código
  /*
  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  // let options = data.response[title]//arreglo que trae los datos
  */
  
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
       </select>
    </>
  )
}

export default SectionList
// {
// 	"user": {
// 		"name": "Usuario1",
// 		"email": "Usuario1@Usuario1.com",
// 		"role": "employer",
// 		"id": "628554154bdb4706126f7787"
// 	},
// 	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXN1YXJpbzEiLCJlbWFpbCI6IlVzdWFyaW8xQFVzdWFyaW8xLmNvbSIsInJvbGUiOiJlbXBsb3llciIsImlkIjoiNjI4NTU0MTU0YmRiNDcwNjEyNmY3Nzg3IiwiaWF0IjoxNjUzMzYxNTA0LCJleHAiOjE2NTM5NjYzMDR9.eooxzzqmJ996x3j_i5ZzG9IyFWnZK4H3PanHp9ONFDU"
// }
// {
// 	"user": {
// 		"name": "Prueba1",
// 		"email": "Prueba1@Usuario1.com",
// 		"role": "applicant",
// 		"id": "628c489ddba4083cb5967642"
// 	},
// 	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJ1ZWJhMSIsImVtYWlsIjoiUHJ1ZWJhMUBVc3VhcmlvMS5jb20iLCJyb2xlIjoiYXBwbGljYW50IiwiaWQiOiI2MjhjNDg5ZGRiYTQwODNjYjU5Njc2NDIiLCJpYXQiOjE2NTMzNjA3OTcsImV4cCI6MTY1Mzk2NTU5N30.n4UgkQU3f3uEi3eqEqFoeIifqPml5AQNtfshnxeA_Tg"
// }insonia


