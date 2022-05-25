import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
// import Controls from "./Controls";
// import Menu1 from './Menu1'
import MenuPrueba from './MenuPrueba'
import { apiTokenJobs } from "../../helpers/url";
import Search from "./Search";
import { authContext } from "../../context/AuthContext";
// import SectionList from "./SectionList";

const Categories = () => {
  const context = useContext(authContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    apiTokenJobs("/api/jobs").then((data) => {
      setData([data]);
      // console.log(data)
    }).catch((error)=> {
      // console.log(error)
    });
  }, []);
  return (
    <div>
      {/* <Controls/> */}
      {/* <Menu1/> */}
      <MenuPrueba/>
      <Search/>
      {/* <SectionList/> */}
      {/* <Card/> */}
      {/* {data.map((item, i) => (
        <Card key={i} info={item}/>
      ))} */}
    </div>
  );
};

export default Categories;
