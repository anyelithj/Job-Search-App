import React, { useEffect, useState } from 'react'
import { apiTokenJobs } from '../../helpers/url';

const MenuPrueba = () => {
    const [data, setData] = useState([])
    const [idArticulos, setIdArticulos] = useState(-1);

    useEffect(() => {
      apiTokenJobs("/api/jobs").then((data) => {
        setData(data)
        setIdArticulos([data]);
        // console.log(data)
      }).catch((error)=> {
        // console.log(error)
      });
    }, []);

    const handleSubArticulos = (e) =>{
        const opcion = e.target.value;
        // console.log(opcion);
        setIdArticulos(opcion)
    }
    // console.log(data.data)
  return (
    <div>
      <h2>Categorias</h2>
      {/* <select name='categorias' id='selCategorias' onClick={handleSubArticulos}>
        <option value={-1}>Seleccione una opción:</option>
        {
            data.data.map((item, i)=>(
                <option key={i} value={i}>{item.title}</option>
            ))
        }
      </select> */}
      {/* <select name='articulos' id='selarticulo'>
        {
            idArticulos > -1 && (
                data.data[idArticulos].articulos.map((item, i)=>(
                    <option key={i} value={i}>{item}</option>
                ))
            )    
        }
      </select> */}
    </div>
  )
}

export default MenuPrueba
