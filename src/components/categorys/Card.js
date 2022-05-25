// import { Button, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@mui/material';
// import { red } from '@mui/material/colors';
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthContext";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { apiTokenJobs } from "../../helpers/url";
import '../../styles/components/Card.scss';

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });

const Card = () => {
  // const classes = useStyles();
  const context = useContext(authContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    apiTokenJobs("/api/jobs").then((data) => {
      setData([data.data]);
      // console.log(data)
    }).catch((error)=> {
      console.log(error)
    });
  }, []);

  console.log(data);
  // console.log(Array.isArray(data))
  
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className="box__card">
          <div className="card__content">
            <h3 className="card__title">{item[i].title}</h3>
            <p className="card__subTitle"><strong>Categoria:</strong>{item[i].category.map((cat,i)=>(<ul key={i}><li>{`${cat} - `}</li></ul>))}</p>
            <div>
              <p className="card__text">
              {item[i].description}
              </p>
              <div className="card__location">
                <AddLocationIcon/>
                <span>{item[i].location.country}</span> -
                <span>{item[i].location.province}</span>
              </div>
              <div className="card__date">
                <AccessTimeIcon/>
                <span>{item[i].creationDate}</span>
              </div>
            </div>
            <button className="card__button">Ver</button>
          </div>
        </div>
      ))} 
    </>
  );
};

export default Card;
