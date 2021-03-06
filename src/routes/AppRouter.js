import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  LoginEmployeer  from "../components/login/LoginEmployeer";
import  RegisterEmployee  from "../components/login/RegisterEmployee";
import  RegisterEmployer  from "../components/login/RegisterEmployer";
import { NavBar } from "../components/navBar/NavBar";
import { Home } from "../components/pages/Home";
import { useContext, useEffect } from 'react';
import { authContext } from '../context/AuthContext';
import { apiToken } from '../helpers/url';
import Categories from "../components/categorys/Categories";
// import Controls from '../components/categorys/Controls';

function AppRouter() {

  const context = useContext(authContext)

  useEffect(()=>{
    apiToken("/api/auth/validate")
    .then(({data})=>{
      if(data.failed){
        console.log(data)
      }else{
        context.setAuth({
          id:data.user.id,
          name:data.user.name,
          logged:true
        })
      }
    })
  },[])


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrarse" element={<RegisterEmployer />} />
        <Route path="/webpros/login" element={<RegisterEmployee />} />
        <Route path="/empleos" element={<Categories/>}/>
        <Route path="/members/auth/login" element={<LoginEmployeer />} />
        <Route path="/login" element={<LoginEmployeer />} />
        {/* <Route path="/empleos" element={<Controls/>}/> */}
     </Routes>
    </Router>
  );
}

export default AppRouter;
